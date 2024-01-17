import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllBolg } from "../Redux/AllBlogSlice"
import { Button, Pagination, Paper, Typography } from "@mui/material"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from "react-router-dom";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ReactPaginate from "react-paginate";
import { getSearchBlog } from "../Redux/SearchSlice";
import { getRecentBlog } from "../Redux/RecentBlogSlice";

const Blogs = () => {
    const{ recentBlog}=useSelector((state)=>state?.recent_Blogs)
    const { all_blog_data } = useSelector((state) => state?.blogs)
    const{search_blog}=useSelector((state)=>state?.blogs_search)
    const count = search_blog?.count
    const blog = all_blog_data?.data
    const dispatch = useDispatch()
    const[search,setSearch]=useState('')
    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(e.target.value);
        // Dispatch action to get search results
        dispatch(getSearchBlog(value));
      };
    useEffect(() => {
        dispatch(getRecentBlog())
        dispatch(getAllBolg())
    }, [dispatch])
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
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(2)
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1);
    }
    const indexOfLastPost = currentPage * postPerPage;
    const indexofFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = blog?.slice(indexofFirstPost, indexOfLastPost);

    return (
        <>
             <div className="upper">
                <center><h1 style={{ paddingTop: 50, textAlign: "center", color: '000080' }}>Our Blogs</h1></center>
                <center><h2 style={{ textAlign: "center", color: '000080' }}>All Blogs</h2></center>
            </div>
            <div class="container" style={{marginTop:10}}>
                <div class="row">
                    <div class="col-sm"  style={{marginTop:10}}>
                        {
                            currentPosts?.map((items) => {
                                return (
                                    <>
                                        <Paper sx={{
                                            marginTop: 4,
                                            gap: 1,
                                            p: 2,
                                            borderRadius: 2,
                                            display: 'grid',
                                            boxShadow: '0px 0px 30px rgba(0,0,0,0.5)'

                                        }} elevation={10}>

                                            <Typography>
                                                <img src={`https://doctor-service.onrender.com/${items?.image}`} style={{ width: "450px", height: "250px" }} />
                                            </Typography>
                                            <Typography>
                                                <p style={{ color: '#1b0d4a' }}><CalendarMonthIcon sx={{ color: '#1b0d4a' }} />{formatDate(items?.createdAt)}</p>
                                            </Typography>
                                            <Typography variant="h5">
                                                <Link style={{color:'black'}} to={`/blog-single/${items?._id}`}>{items?.title}</Link>
                                            </Typography>
                                            <Typography variant="h8">
                                                {items?.description}
                                            </Typography>
                                            <Link to={`/blog-single/${items?._id}`}>
                                                <Button variant="contained">
                                                    Details <ArrowRightIcon />
                                                </Button>
                                            </Link>
                                        </Paper>
                                       

                                    </>
                                )
                            })
                        }
                         <div className="col-lg-12 col-md-12">
                                            <div style={{marginTop:20,marginLeft:'400px'}}>
                                             <ReactPaginate
                                                    breakLabel={<span className="page-numbers current">...</span>}
                                                    nextLabel={<a className="page-numbers" href="#!"><i className="icofont-thin-double-right"></i></a>}
                                                    onPageChange={handlePageClick}
                                                    pageCount={Math.ceil(blog?.length / postPerPage)}
                                                    // previousLabel={<a className="page-numbers" href="#!">{'< Previous'}</a>}
                                                    activeClassName={'active'}
                                                    containerClassName={'pagination'}
                                                    pageClassName={'page-numbers'}
                                                    pageLinkClassName={'page-link'}
                                                    breakClassName={'page-numbers current'}
                                                    breakLinkClassName={'page-link'}
                                                    previousClassName={'page-numbers'}
                                                    previousLinkClassName={'page-link'}
                                                    nextClassName={'page-numbers'}
                                                    // nextLinkClassName={'page-link'}
                                                /> 
           
                                            </div>
                                        </div>
                    </div>
                    <div class="col-sm"  style={{marginTop:35}}>
                    <div class="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
	<div class="sidebar-widget search  mb-3 ">
		<h5>Search Here</h5>


		<form class="search-form">
  <input type="text" class="form-control" placeholder="search" value={search} onChange={handleChange} />
  <i class="ti-search"></i>
</form>


	</div>



<div class="sidebar-widget latest-post mb-3">
  {search ? <h5>{count} Blogs found</h5> : null}

  {search_blog?.data?.length > 0 ? (
    search_blog?.data?.map((item, index) => (
      <div class="py-2" key={index}>
        <span class="text-sm text-muted">{formatDate(item?.createdAt)}</span>
        <h6 class="my-2">
          <Link to={`/blog-single/${item?._id}`}>{item?.title}</Link>
        </h6>
      </div>
    ))
  ) : (
    <p style={{ color: search ? 'red' : 'transparent', fontWeight: 'bold' }}>
      No blogs found!
    </p>
  )}
</div>




  <div class="sidebar-widget latest-post mb-3">
		<h5>Recent Blogs</h5>

    {recentBlog?.data?.map((item, index) => {
return (
     <>

        <div class="py-2">
        	<span class="text-sm text-muted">{formatDate(item?.createdAt)}</span>
            <h6 class="my-2"><Link to={`/blog-single/${item?._id}`}>{item?.title}</Link></h6>
        </div>

        </>
        );
       })}
	</div>

	

</div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Blogs