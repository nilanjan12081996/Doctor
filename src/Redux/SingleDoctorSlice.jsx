import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../Api/ApiUrls"

const initialState={
    singleDoc:{},
    loading:false,
    error:null
}
export const getSingleDoc=createAsyncThunk(
    'docDetails',
    async(id)=>{
        const res= await axiosInstance.get(`doctordetails/${id}`)
        console.log(res?.data?.data);
        return res?.data
    }
)
export const SingleDoctorSlice=createSlice(
    {
        name:'fetchSingleDoc',
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(getSingleDoc.pending,(state)=>{
                state.loading=true
            }).addCase(getSingleDoc.fulfilled,(state,action)=>{
                state.loading=false
                state.singleDoc=action?.payload

            }).addCase(getSingleDoc.rejected,(state)=>{
                state.error='Reject'
            })
        }
    }
)