import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../Api/ApiUrls"

const initialState={
    status:"",
    doc:[]
}
export const getAllDoc=createAsyncThunk(
    'doctors',
    async()=>{
        const res=await axiosInstance.get('alldoctordepartment')
        console.log(res?.data);
        return res?.data
    }
)
export const AllDocDeptSlice=createSlice(
   {
    name:'fetchDoc',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllDoc.pending,(state)=>{
            state.status="loading"
        }).addCase(getAllDoc.fulfilled,(state,action)=>{
            state.doc=action.payload
        }).addCase(getAllDoc.rejected,(state)=>{
            state.status="Reject"
        })
    }
   } 

)