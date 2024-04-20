import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Loading: false,
  error: false,
  relatedproduct_data: [],
};

export const relatedproductdetails = createAsyncThunk(
  "relatedproductdetails",
  async (id) => {
    console.log(id);
    const response = await axios.get(`https://industrial-tools-3.onrender.com/relatedproducts/${id}`);
    return response;
  }
);

const relatedproductSlice = createSlice({
  name: "relatedproduct",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(relatedproductdetails.pending, (state, action) => {
      state.Loading = true;
    });
    builder.addCase(relatedproductdetails.fulfilled, (state, action) => {
      state.Loading = false;
      state.relatedproduct_data = action.payload.data.details;
    });
    builder.addCase(relatedproductdetails.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default relatedproductSlice.reducer;
