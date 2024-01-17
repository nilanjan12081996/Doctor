import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../Redux/SingleBlogSlice";
import { Paper, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { getComment } from "../Redux/GetCommentSlice";

const SingleBlog=()=>{
    const{id}=useParams()
    const dispatch=useDispatch()
const{singleBlog}=useSelector((state)=>state?.oneBlog)
const{comments}=useSelector((state)=>state?.commnets_details)
const formatDate = (timestamp) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
  
    return new Date(timestamp).toLocaleString('en-US', options);
  };
  const[comment,setComment]=useState()
  useEffect(()=>{
    dispatch(getSingleBlog(id))
    dispatch(getComment(id))
  },[dispatch,id])
    return(
        <>
        <div className="upper">
                <center><h1 style={{ paddingTop: 50, textAlign: "center", color: '000080' }}>Our Blogs</h1></center>
                <center><h2 style={{ textAlign: "center", color: '000080' }}>One Blog</h2></center>
            </div>
            
            <Paper elevation={5} sx={{marginTop:8}}>
            <center>
                <Paper sx={{}}>
                            <Typography sx={{ fontSize: 14,marginTop:5 }} color="text.secondary" gutterBottom>
                            <img src={`https://doctor-service.onrender.com/${singleBlog?.data?.image}`} alt="pic" style={{  width: "70rem", height: "40rem" }} /> 
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} >
                          <h2> {singleBlog?.data?.title}</h2>    
                            </Typography>
                            <Typography sx={{textAlign:'left'}}>
                          <p>{singleBlog?.data?.description}</p>
                            </Typography>
                             <Typography sx={{textAlign:'right',marginRight:10}}>
                              <span style={{marginRight:5}}><FacebookIcon/></span>
                              <span style={{marginRight:5}}><InstagramIcon/></span>
                              <span style={{marginRight:5}}><TwitterIcon/></span>
                              <span style={{marginRight:5}}><YouTubeIcon/></span>
                            </Typography> 
                            </Paper>
                            </center>

                            {
                              comments?.data?.map((items)=>{
                                return(
                                  <>
                                  <p>{items?.comment}</p>
                                  </>
                                )
                              })
                            }
        </Paper>
        
        </>
    )
}
export default SingleBlog