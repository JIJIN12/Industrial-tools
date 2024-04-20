import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Loading: false,
  error: false,
  product_data: [],
};

export const productdetails = createAsyncThunk("productdetails", async (id) => {
  try {
    console.log("start");
    const response = await axios.get(`https://industrial-tools-3.onrender.com/allitems/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(productdetails.pending, (state, action) => {
      state.Loading = true;
    });
    builder.addCase(productdetails.fulfilled, (state, action) => {
      state.Loading = false;
      state.product_data = action.payload.data.details;
    });
    builder.addCase(productdetails.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default productSlice.reducer;
