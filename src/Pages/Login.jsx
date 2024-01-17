import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Redux/loginSlice";
import { Paper } from "@mui/material";
import 'react-toastify/dist/ReactToastify.css';
import './login.css'
import { ToastContainer } from "react-toastify";

const Login=()=>{
const {redirectTo}=useSelector((state)=>state?.auth1)
const[email,setEmail]=useState();
const[password,setPassword]=useState();
const dispatch=useDispatch();
const navigate = useNavigate();
const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ email, password }));
  };

  const check =()=>{
    let token = localStorage.getItem("token")
    if (token == null || token == undefined || token == "") {
        navigate("/login");
        
    }
}
useEffect(() => {
    check()
    navigate(redirectTo)
}, [redirectTo])
    return(
        <>
         <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                icon={true}
            />
<center>  
          <Paper sx={{height:340,width:800, textAlign:'left',marginTop:7, paddingTop:3, boxShadow:'0px 0px 30px rgba(0,0,0,0.8)'}}>
          <div className="main">
          <div className="pic">
        <img src="https://sales.webtel.in/images/Login-page-character1.png" height={'300px'} width={'350px'}/>
    </div>
           <div className='container'>
      <div className='row mt-5'>
        <div className='col-6 mx-auto mb-5'>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <div className='card shadow p-3'>
              <div className='card-header' style={{backgroundColor:"#223A66"}}>
                <h4 className='text-center' style={{color:"#FFFFFF"}}>Login</h4>
              </div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-group'>
                      <label className='form-label'><strong>Email</strong></label>
                      <input type="email" name="email" className='form-control' onChange={(e)=>setEmail(e.target.value)} required />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-group'>
                      <label className='form-label'><strong>Password</strong></label>
                      <input type="password" name="password" className='form-control' onChange={(e)=>setPassword(e.target.value)} required />
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-footer' style={{backgroundColor:"#F4F9FC"}}>
                <button className='btn btn-info btn-sm' style={{backgroundColor:"#E12454"}}>Login</button>
                <strong><p className='mt-2'>
                  Don't have an account? <Link to="/register">Register here</Link>
                </p></strong>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    </Paper>
    </center>
        </>
    )
}
export default Login