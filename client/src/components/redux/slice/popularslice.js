import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    Loading:false,
    error:false,
    popular_data:[],
    popularproduct_data:[],
}

export const populardetails = createAsyncThunk('populardetails',async ()=>{
    const response = await axios.get('http://localhost:1000/popular')
    return response
})
export const popularproductdetails = createAsyncThunk('popularproductdetails',async (id)=>{
    const response = await axios.get(`http://localhost:1000/popular/${id}`)
    return response
})

const popularSlice = createSlice({
    name:'popular',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(populardetails.pending,(state,action)=>{
            state.Loading = true
        })
        builder.addCase(populardetails.fulfilled,(state,action)=>{
            state.Loading = false
            state.popular_data  = action.payload.data.details

        })
        builder.addCase(populardetails.rejected,(state,action)=>{
            state.error = true
        })
        builder.addCase(popularproductdetails.pending,(state,action)=>{
            state.Loading = true
        })
        builder.addCase(popularproductdetails.fulfilled,(state,action)=>{
            state.Loading = false
            state.popularproduct_data  = action.payload.data.details

        })
        builder.addCase(popularproductdetails.rejected,(state,action)=>{
            state.error = true
        })
    }
})

export default popularSlice.reducer