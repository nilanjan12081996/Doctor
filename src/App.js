// import logo from './logo.svg';

import './App.css';
import Navbar from './Component/Common/Navbar';
import Department from './Pages/Department';
import DeptWiseDoc from './Pages/DeptWiseDoc';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SingleDoctor from './Pages/SingleDoctor';
import Doctors from './Pages/Doctors';
import Blogs from './Pages/Blogs';
import SingleBlog from './Pages/SingleBlog';
function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/departments' element={<Department/>}/>
      <Route path='/all-doctors/:id' element={<DeptWiseDoc/>}/>
      <Route path='/doctor-single/:id' element={<SingleDoctor/>}/>
      <Route path='/doctor' element={<Doctors/>}/>
      <Route path='/blog' element={<Blogs/>}/>
      <Route path='/blog-single/:id' element={<SingleBlog/>}/>
    </Routes>
   </Router>
   
   </>
  );
}

export default App;
