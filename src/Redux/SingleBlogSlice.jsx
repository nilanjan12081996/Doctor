import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../Api/ApiUrls"

const initialState={
    singleBlog:{},
    status:""

}
 export const getSingleBlog=createAsyncThunk(
    'blog',
    async(id)=>{
        const res=await axiosInstance.get(`singleblog/${id}`)
        return res?.data
    }
)
export const SingleBlogSlice=createSlice({
    name: "SingleBlog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSingleBlog.pending, (state) => {
                state.status = "loading......";
                state. singleBlog = {};
            })
            .addCase(getSingleBlog.fulfilled, (state, { payload }) => {
                state.status = "idle";
                state.singleBlog = payload;
            })
            .addCase(getSingleBlog.rejected, (state) => {
                state.status = "Rejected";
            });
        }

})