import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    Loading:false,
    error:false,
    popular_data:[]
}

export const populardetails = createAsyncThunk('populardetails',async ()=>{
    const response = await axios.get('http://localhost:1000/popular')
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
    }
})

export default popularSlice.reducer