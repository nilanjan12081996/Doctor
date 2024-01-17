import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllDoc } from "../Redux/AllDocDeptSlice"
import { Button, Card, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Doctors=()=>{
    const{doc}=useSelector((state)=>state?. alldoctors)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllDoc())
    },[dispatch])
    return(
        <>
            <div className="upper">
                <center><h1 style={{ paddingTop: 50, textAlign: "center", color: '000080' }}>All Doctors</h1></center>
                <center><h2 style={{ textAlign: "center", color: '000080' }}>Specialized Doctors</h2></center>
            </div>
            
        <div class="container">
  <div class="row">
    {
        doc?.data?.map((items)=>{
            return(
                <>
                    <div class="col-sm">
                    <Card sx={{ maxWidth: 300, marginTop: 5, height: 275,boxShadow:'0px 0px 30px rgba(0,0,0,0.5)'  }}>
                                            <CardContent>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    <img src={`https://doctor-service.onrender.com/${items?.image}`} alt="pic" style={{ width: "250px", height: "170px"  }} />
                                                </Typography>
                                                <Typography variant="h5" component="div" sx={{color:'black'}}>
                                                <Link style={{color:'black'}} to={`/doctor-single/${items?._id}`}>{items?.name}</Link>
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                {items?.department_details?.[0]?.departmentName}
                                                </Typography>
                                            </CardContent>
                                            {/* <CardActions>
                                                <Link to={`/all-doctors/${items._id}`}><Button size="small">Learn More</Button></Link>
                                            </CardActions> */}
                                        </Card>

                    </div>

                    
                </>
            )
        })
    }
    
   
   
  </div>
</div>

<div style={{backgroundColor:'#d6d6d4',marginTop:20,height:400}}>
    <div style={{display:"inline-block"}} >

    <h2 style={{fontSize:50,marginTop:70,marginLeft:40}}> We are pleased to offer <br /> you the
    
    <span style={{color:'#240c70',fontSize:50}}> chance to have the healthy</span>
    </h2>
    <Link to="/appoinmentform" >
            <Button  variant="contained" sx={{backgroundColor:'#8f034b',marginLeft:6,marginTop:5}}>   Get Appointment <ArrowRightIcon/></Button> 
              </Link>
    </div>
    
                        <img src="female-doctor-blue-uniform-pointing-fingers-up-down-looking-hesitant-front-view_176474-32285-removebg-preview.png" style={{marginLeft:720,marginTop:-283}} alt="" />
                    
                    </div>

        </>
    )
}
export default Doctors