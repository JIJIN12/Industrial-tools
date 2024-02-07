// import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//     Loading:false,
//     error:false,
//     cart_data:[]
// }

// export const cartdetails = createAsyncThunk('cartdetails',async ()=>{

//     return response
// })

// const cartSlice = createSlice({
//     name:'cart',
//     initialState,
//     extraReducers:(builder)=>{
//         builder.addCase(cartdetails.pending,(state,action)=>{
//             state.Loading = true
//         })
//         builder.addCase(cartdetails.fulfilled,(state,action)=>{
//             state.Loading = false
//             state.cart_data  = action.payload.data.details

//         })
//         builder.addCase(cartdetails.rejected,(state,action)=>{
//             state.error = true
//         })
//     }
// })

// export default cartSlice.reducer