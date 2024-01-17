import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../Api/ApiUrls"

const initialState={
    loading:false,
    all_doc_dept:{},
    error:null
}
export const getDocByDept=createAsyncThunk('dept_doc',
async(id)=>{
    const response=await axiosInstance.get(`departmentidwisedoctor/${id}`)
    console.log(response?.data?.data);
    return response?.data

}
)
export const allDocByDeptSlice=createSlice(
    {
        name:'deptdoc',
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(getDocByDept.pending,(state,action)=>{
                state.loading=true

            }).addCase(getDocByDept.fulfilled,(state,action)=>{
                state.loading=false
                state.all_doc_dept=action?.payload
            }).addCase(getDocByDept.rejected,(state)=>{
                state.error="Reject"
            })
        }
    }
)