import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../Api/ApiUrls"

const initialState={
    status:"",
    search_blog:[]
}
export const getSearchBlog=createAsyncThunk(
    'serach',
    async(search)=>{
        const res=await axiosInstance.get(`/blogsearch/${search}`)
        return res?.data
    }
)
export const SearchSlice=createSlice(
    {
        name:'blogSearch',
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(getSearchBlog.pending,(state)=>{
                state.status="Loading..."
            }).addCase(getSearchBlog.fulfilled,(state,action)=>{
                state.search_blog=action?.payload
            }).addCase(getSearchBlog.rejected,(state)=>{state.status="Rejected"})
        }
    }
)