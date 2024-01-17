import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getSingleDoc } from "../Redux/SingleDoctorSlice"
import { Button, Card, Paper, Typography } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import DoneIcon from '@mui/icons-material/Done';
const SingleDoctor=()=>{
    const{id}=useParams()
    const{singleDoc}=useSelector((state)=>state?.single_doc)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getSingleDoc(id))
    },[dispatch,id])
    const formatTime = (timeString) => {
      const time = new Date(`2000-01-01T${timeString}`);
      return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      };
    return(
        <>
               <div className="upper">
                <center><h6 style={{ paddingTop: 50, textAlign: "center", color: '000080' }}>Doctor Details</h6></center>
                <center><h2 style={{ textAlign: "center", color: '000080', fontSize:50 }}><b>{singleDoc?.data?.name}</b></h2></center>
            </div>
            <div class="section-title">
                <h2 style={{
                    paddingTop: 20, textAlign: 'center', color: '000070'
                }}>Best Doctors</h2>
                <div class="divider mx-auto my-4"></div>
                <p style={{ textAlign: 'center', color: '000070' }}>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
            </div>
        <Paper  sx={{marginTop:8,height:1000}}>
        <div class="container">
  <div class="row">
    <div class="col-sm">
                            <Typography sx={{ fontSize: 14,marginTop:5 }} color="text.secondary" gutterBottom>
                                <img src={`https://doctor-service.onrender.com/${singleDoc?.data?.image}`} alt="pic" style={{ height: '150px' }} />
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} >
                            <h3> {singleDoc?.data?.name}</h3>  
                            </Typography>
                            <Typography>
                          <span> <b>Department:-</b> </span><span>{singleDoc?.data?.department_id?.departmentName}</span>  
                            </Typography>
                            <Typography>
                              <span style={{marginRight:5}}><FacebookIcon/></span>
                              <span style={{marginRight:5}}><InstagramIcon/></span>
                              <span style={{marginRight:5}}><TwitterIcon/></span>
                              <span style={{marginRight:5}}><YouTubeIcon/></span>
                            </Typography>
    </div>
    <div class="col-sm">
      <h1 style={{marginTop:5}}>Introducing to myself</h1>
      <hr style={{ height: '20px', borderTop: '5px solid #8f034b', margin: '0', width:50 }} />
      <p>{singleDoc?.data?.description
        }</p>

<Link to={`/appoinment/${singleDoc?.data?._id}`}> <Button variant="contained" sx={{backgroundColor:'#8f034b'}}>Make an Appoinment <ArrowRightIcon/></Button></Link>
    </div>
  </div>
</div>
        </Paper>
        <Paper  sx={{marginTop:8,height:400}}>

        <div class="container">
  <div class="row">
    <div class="col-sm-4">
      <Card sx={{height:300,backgroundColor:'#e9f0ed',borderBottom:'none'}}>
      <h2>My Skills</h2>
      <hr style={{ height: '20px', borderTop: '5px solid #8f034b', margin: '0', width:50 }} />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto voluptatem alias, aspernatur
					voluptatibus corporis quisquam? Consequuntur, ad, doloribus, doloremque voluptatem at consectetur natus eum
					ipsam dolorum iste laudantium tenetur.</p>
      </Card>
     
    </div>
    <div class="col-sm-4">
      <Card sx={{height:300,backgroundColor:'#e9f0ed'}}>
      <h2>Expertise area</h2> 
   <hr style={{ height: '20px', borderTop: '5px solid #8f034b', margin: '0', width:50 }} />
    <ul>
                  <li style={{ listStyleType: 'none' }}><DoneIcon sx={{color:'#8f034b'}} />International Drug Database</li>
                  <li style={{ listStyleType: 'none' }}><DoneIcon sx={{color:'#8f034b'}} />Stretchers and Stretcher Accessories</li>
                  <li style={{ listStyleType: 'none' }}><DoneIcon sx={{color:'#8f034b'}}/>Cushions and Mattresses</li>
                  <li style={{ listStyleType: 'none' }}><DoneIcon sx={{color:'#8f034b'}}/>Cholesterol and lipid tests</li>
                  <li style={{ listStyleType: 'none' }}><DoneIcon sx={{color:'#8f034b'}}/>Critical Care Medicine Specialists</li>
                  <li style={{ listStyleType: 'none' }}><DoneIcon sx={{color:'#8f034b'}}/>Emergency Assistance</li>
    </ul>
      </Card>
  
    </div>
    <div class="col-sm-4">
    <Card sx={{height:300,backgroundColor:'#e9f0ed'}}>
    <h2>Make Appoinment</h2>  
  <hr style={{ height: '20px', borderTop: '5px solid #8f034b', margin: '0', width:50 }} />
  <ul>
    <li style={{ listStyleType: 'none' }}>

    <span>Monday - Friday </span>
		<span>{formatTime(singleDoc?.data?.aperture_time)} - {formatTime(singleDoc?.data?.departure_time)}</span>
    </li>
    <li style={{ listStyleType: 'none' }}>
    <span>Sunday </span>
							<span>Closed</span>
    </li>

  </ul>
  <p style={{fontSize:15}}>Need Urgent Help?</p>
						<h3 style={{fontSize:20,color:'#8f034b', marginTop:3}}>+23-4565-65768</h3>

    </Card>
     </div>
  </div>
</div>
          </Paper>

        </>
    )
}
export default SingleDoctor