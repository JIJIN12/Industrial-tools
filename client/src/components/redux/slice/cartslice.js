import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Loading: false,
  error: false,
  cartitems_data: [],
};

export const cartitemdetails = createAsyncThunk(
  "cartitemdetails",
  async (value) => {
    try {
      console.log("start", value);
      const response = await axios.post(
        ` http://localhost:1000/cart/add/${value}`
      );
      console.log("response", response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const cartitemSlice = createSlice({
  name: "cartitem",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(cartitemdetails.pending, (state, action) => {
      state.Loading = true;
    });
    builder.addCase(cartitemdetails.fulfilled, (state, action) => {
      state.Loading = false;
      state.cartitems_data = action.payload.data.details;
    });
    builder.addCase(cartitemdetails.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default cartitemSlice.reducer;
