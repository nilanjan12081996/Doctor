import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../Api/ApiUrls"

const initialState={
    status:"",
    comments:[]
}
export const getComment=createAsyncThunk(
    'comm',
    async(id)=>{
        const res=await axiosInstance.get(`getblogcomment/${id}`)
        console.log(res?.data);
        return res?.data
    }
)
export const GetCommentSlice=createSlice(
    {
        name:'comms',
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(getComment.pending,(state)=>{
                state.status="Loading..."
            }).addCase(getComment.fulfilled,(state,action)=>{
                state.status="idle"
                state.comments=action.payload
            }).addCase(getComment.rejected,(state)=>{
                state.status="Reject.."
            })
        }
    }
)