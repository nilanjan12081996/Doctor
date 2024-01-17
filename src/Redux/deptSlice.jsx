import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/ApiUrls"

const initialState={
    dep:[],
    loading:false,
    error:null
}

export const getAllDept=createAsyncThunk(
    'allDept',
    async()=>{
        try {
            const response=await axiosInstance.get('alldepartment')
            console.log(response?.data?.data);
        return response?.data?.data
        } catch (error) {
            console.error("Error fetching all departments:", error);
            throw error;
        }
        
    }
)
export const deptSlice=createSlice(
    {
        name:'getdept',
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(getAllDept.pending,(state,action)=>{
                state.loading=true
            }).addCase(getAllDept.fulfilled,(state,action)=>{
                state.loading=false
                state.dep=action.payload
            }).addCase(getAllDept.rejected,(state,action)=>{
                state.error='somwthing went wrong'
                state.loading=false
            })
        }
    }
)