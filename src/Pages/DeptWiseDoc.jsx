import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDocByDept } from "../Redux/allDocByDeptSlice"
import { Link, useParams } from "react-router-dom"
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"

const DeptWiseDoc = () => {
    const { id } = useParams()
    const { all_doc_dept } = useSelector((state) => state?.dept_wise_doc)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDocByDept(id))
    }, [dispatch, id])
    const data = all_doc_dept?.data || [];
    const firstDepartmentName = data.length > 0 ? data[0].department_id.departmentName : '';
    return (
        <>
            <div className="upper">
                <center><h1 style={{ paddingTop: 50, textAlign: "center", color: '000080' }}>All Doctors Of</h1></center>
                <center><h2 style={{ textAlign: "center", color: '000080' }}>{firstDepartmentName}</h2></center>
            </div>
            <div class="section-title">
                <h2 style={{
                    paddingTop: 20, textAlign: 'center', color: '000070'
                }}>Best Doctors</h2>
                <div class="divider mx-auto my-4"></div>
                <p style={{ textAlign: 'center', color: '000070' }}>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
            </div>
            <div class="container">
                <div class="row">


                    {
                        data?.map((items) => {
                            return (
                                <>
                                    <div class="col-sm-4">
                                        <Card sx={{ maxWidth: 375, marginTop: 5, height: 400,boxShadow:'0px 0px 30px rgba(0,0,0,0.5)'  }}>
                                            <CardContent>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    <img src={`https://doctor-service.onrender.com/${items?.image}`} alt="pic" style={{ height: '200px' }} />
                                                </Typography>
                                                <Typography variant="h5" component="div">
                                                    {items?.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {items?.description.slice(0, 100)}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Link to={`/doctor-single/${items._id}`}><Button variant="contained">Make Appoinment</Button></Link>
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
export default DeptWiseDoc