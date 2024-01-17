import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../Api/ApiUrls"
import { toast } from "react-toastify"

const initialState={
   
    redirectToo:"",
    loading:false
}
export const register=createAsyncThunk(
    "reg",
    async({name,email,phone,password,forget,image})=>{
        const res=await axiosInstance.post("register",{name,email,phone,password,forget,image},{
            headers: {
                'Content-Type': 'multipart/form-data',
              },
        })
        console.log(res?.data);
        return res?.data
    }
)
export const login=createAsyncThunk(
    "log",
    async(data)=>{
        const res=await axiosInstance.post("login",data)
        console.log("loginData: ",res?.data);
        return res?.data
    }
)
export const authSlice=createSlice(
    {
        name:"authentication",
        initialState,
        reducers:{
                reset_redirectToo:(state,payload)=>{
                    state.redirectToo=payload
                },
            

        },
        extraReducers:(builder)=>{
            builder.addCase(register.pending,(state,action)=>{
                state.loading=true
            }).addCase(register.fulfilled,(state,action)=>{
                state.loading=false
                    state.redirectToo='/login'
                    toast(action?.payload?.message, {
                        position: toast.POSITION.TOP_CENTER,
                      });
            }).addCase(register.rejected, (state, action) => {
                state.loading = false;
                toast("Email Already Exists!", {
                  position: toast.POSITION.TOP_CENTER,
                });
              })
            
        }

    }
)
export const {reset_redirectToo}= authSlice.actions;