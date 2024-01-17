import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../../Redux/loginSlice";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
const Navbar = () => {

	const { Logouttoggle } = useSelector((state)=>state?.auth1)
    const name = localStorage.getItem("name");
   // console.log("navbar: ",Logouttoggle);

	const navigate = useNavigate()
    const dispatch = useDispatch()


	const handleLogout = () => {
		window.location.reload();
		dispatch(logout());
		
		navigate("/login");
		toast("Logout Successful", {
		  position: toast.POSITION.TOP_CENTER,
		});
	  };
	  
 


  return (
    <div>
      <header>
	<div class="header-top-bar" style={{backgroundColor:'#14125c',height:'50px',paddingTop:'5px'}}>
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-6">
					<ul class="top-bar-info list-inline-item pl-0 mb-0">
						<li class="list-inline-item"><a href="mailto:support@gmail.com" style={{color:"white"}}><i class="icofont-support-faq mr-2"></i>support@doctor.com</a></li>
						<li class="list-inline-item" style={{color:"white"}}><AddLocationAltIcon/>Address Sector V, Kolkata, India </li>
					</ul>
				</div>
				<div class="col-lg-6">
					<div class="text-lg-right top-right-bar mt-2 mt-lg-0">
						<a href="tel:+23-345-67890" style={{color:"white"}}>
							<span>Call Now : </span>
							<span class="h4">+70 038 72 448</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<nav class="navbar navbar-expand-lg navigation" id="navbar">
		<div class="container">
			<Link class="navbar-brand" to="/">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMw0oKf_ta05FgXZf6jAlXPmRwuJcqsiZpSQ&usqp=CAU" alt="" class="img-fluid" style={{ width: '240px', height: '90px' }}/>
			</Link>

			<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain"
				aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
				<span class="icofont-navigation-menu"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarmain">
				<ul class="navbar-nav ml-auto" >
					<li class="nav-item "><Link class="nav-link" to='/' style={{color:'black'}}>Home</Link></li>
					<li class="nav-item"><Link class="nav-link" to='/about' style={{color:'black'}}>About</Link></li>
					<li class="nav-item"><Link class="nav-link" to='/services' style={{color:'black'}}>Services</Link></li>
					<li class="nav-item"><Link class="nav-link" to='/departments' style={{color:'black'}}>Department</Link></li>
					<li class="nav-item"><Link class="nav-link" to='/doctor' style={{color:'black'}}>Doctors</Link></li>
					<li class="nav-item"><Link class="nav-link" to="/blog" style={{color:'black'}}>Blog</Link></li>
					<li class="nav-item"><Link class="nav-link" to="/contact" style={{color:'black'}}>Contact</Link></li>

{
           Logouttoggle ? <>
          <li className="nav-item active">
          <Link className="nav-link"  style={{color:'black'}}><strong>{name}</strong></Link>
        </li>
        <li>
        
</li>

        <li className="nav-item">
          <Link className="nav-link" to={'/dashboard'}  style={{color:'black'}}>Dashboard</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to={'/login'} onClick={handleLogout} style={{color:'black'}}>Logout</Link>
        </li>
          </> 
		  : <>
            <li className="nav-item active">
          <Link className="nav-link" to={'/login'} style={{color:'black'}}>Login</Link>
        </li>
          </>  
            
        }
				</ul>
			</div>
		</div>
	</nav>
</header>
    </div>
  )
}

export default Navbar