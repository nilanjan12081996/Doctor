import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllDept } from "../Redux/deptSlice"
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import './dept.css'

const Department = () => {
    const { dep, loading } = useSelector((state) => state?.depts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllDept())
    }, [dispatch])
    return (
        <>
           <div className="upper">
               <center><h1 style={{paddingTop:50, textAlign:"center", color:'000080'}}>All Department</h1></center>
               <center><h2 style={{textAlign:"center", color:'000080'}}>  Care Department</h2></center>
           </div>
           <div class="section-title">
					<h2 style={{
                        paddingTop:20,textAlign:'center', color:'000070'
                    }}>Award winning patient care</h2>
					<div class="divider mx-auto my-4"></div>
					<p style={{textAlign:'center', color:'000070'}}>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
				</div>
            <div class="container">
                <div class="row">
                   

                    {
                        dep?.map((items) => {
                            return (
                                <>


                                    <div class="col-sm-4">
                                        <Card sx={{ maxWidth: 375, marginTop: 5, height: 400,boxShadow:'0px 0px 30px rgba(0,0,0,0.5)'  }}>
                                            <CardContent>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    <img src={`https://doctor-service.onrender.com/${items?.image}`} alt="pic" style={{ height: '200px' }} />
                                                </Typography>
                                                <Typography variant="h5" component="div">
                                                    {items?.departmentName}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {items?.description.slice(0, 100)}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Link to={`/all-doctors/${items._id}`}><Button size="small">Learn More</Button></Link>
                                            </CardActions>
                                        </Card>
                                    </div>
                                </>
                            )
                        })
                    }




                </div>
            </div>




        </>
    )
}
export default Department