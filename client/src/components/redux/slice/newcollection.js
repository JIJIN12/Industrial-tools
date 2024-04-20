import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Loading: false,
  error: false,
  newcollection_data: [],
};

export const newcollectiondetails = createAsyncThunk(
  "newcollectiondetails",
  async (id) => {
    console.log(id);
    const response = await axios.get(`https://industrial-tools-3.onrender.com/newcollection/${id}`);
    return response;
  }
);

const newcollectionSlice = createSlice({
  name: "newcollection",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(newcollectiondetails.pending, (state, action) => {
      state.Loading = true;
    });
    builder.addCase(newcollectiondetails.fulfilled, (state, action) => {
      state.Loading = false;
      state.newcollection_data = action.payload.data.details;
    });
    builder.addCase(newcollectiondetails.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default newcollectionSlice.reducer;
