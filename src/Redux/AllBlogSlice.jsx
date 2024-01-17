import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../Api/ApiUrls"

const initialState={
    all_blog_data: [],
    status:""
}
export const getAllBolg=createAsyncThunk(
    'blogs',
    async()=>{
        const res=await axiosInstance.get('allblog')
        console.log(res?.data);
        return res?.data
    }
)
export const AllBlogSlice=createSlice(
    {
        name:'allblogs',
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(getAllBolg.pending,(state)=>{
                state.status="loading"
            }).addCase(getAllBolg.fulfilled,(state,action)=>{
                state.all_blog_data=action?.payload
            }).addCase(getAllBolg.rejected,(state)=>{
                state.status='Rejected'
            })
        }
    }
)