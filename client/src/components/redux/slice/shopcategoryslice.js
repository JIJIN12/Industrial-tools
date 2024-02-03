import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    Loading:false,
    error:false,
    allitem_data:[]
}

export const allitemdetails = createAsyncThunk('allitemdetails',async ()=>{
    try {
        console.log('start');
        const response = await axios.get('http://localhost:1000/allitems')
    console.log(response);
    return response
    } catch (error) {
        console.log(error);
    }
    
})

const allitemSlice = createSlice({
    name:'allitem',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(allitemdetails.pending,(state,action)=>{
            state.Loading = true
        })
        builder.addCase(allitemdetails.fulfilled,(state,action)=>{
            state.Loading = false
            state.allitem_data  = action.payload.data.details

        })
        builder.addCase(allitemdetails.rejected,(state,action)=>{
            state.error = true
        })
    }
})

export default allitemSlice.reducer