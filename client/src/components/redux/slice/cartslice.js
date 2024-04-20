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
  async (id) => {
    try {
      console.log("start", id);
      const response = await axios.post(`http://localhost:1000/cart/add/${id}`);
      console.log("response", response);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
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
    // builder.addCase(cartnewcollectionitemdetails.pending, (state, action) => {
    //   state.Loading = true;
    // });
    // builder.addCase(cartnewcollectionitemdetails.fulfilled, (state, action) => {
    //   state.Loading = false;
    //   state.cartitems_data = action.payload.data.details;
    // });
    // builder.addCase(cartnewcollectionitemdetails.rejected, (state, action) => {
    //   state.error = true;
    // });

    // builder.addCase(cartpopularitemdetails.pending, (state, action) => {
    //   state.Loading = true;
    // });
    // builder.addCase(cartpopularitemdetails.fulfilled, (state, action) => {
    //   state.Loading = false;
    //   state.cartitems_data = action.payload.data.details;
    // });
    // builder.addCase(cartpopularitemdetails.rejected, (state, action) => {
    //   state.error = true;
    // });

    // builder.addCase(cartrelateditemdetails.pending, (state, action) => {
    //   state.Loading = true;
    // });
    // builder.addCase(cartrelateditemdetails.fulfilled, (state, action) => {
    //   state.Loading = false;
    //   state.cartitems_data = action.payload.data.details;
    // });
    // builder.addCase(cartrelateditemdetails.rejected, (state, action) => {
    //   state.error = true;
    // });
  },
});

export default cartitemSlice.reducer;
