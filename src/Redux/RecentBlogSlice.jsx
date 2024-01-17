import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../Api/ApiUrls"

const initialState={
    status:"",
    recentBlog:[]
}
export const getRecentBlog=createAsyncThunk(
    'recent',
    async()=>{
        const res=await axiosInstance.get('recentblog')
        console.log("recent Blog",res?.data);
        return res?.data
    }
)
export const RecentBlogSlice=createSlice(
    {
        name:"recent_blog",
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(getRecentBlog.pending,(state)=>{
                state.status="loading..."
            }).addCase(getRecentBlog.fulfilled,(state,action)=>{
                state.recentBlog=action?.payload
            }).addCase(getRecentBlog.rejected, (state) => {
                state.status = "rejected";
            });
        }
    }
)