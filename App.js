import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Header from './Navigation/Header';
import Error from './Components/Error';
import CustomerHome from './Components/CustomerHome';
//import About from './Components/About';
//import AllProducts from './Components/AllProducts';
//import CustomerLogin from './Components/CustomerLogin';
//import AdminLogin from './Components/AdminLogin';
//import Registration from './Components/Registration';
//import Contact from './Components/Contact';
//import FeedBack from './Components/FeedBack';
import {Route,Routes} from 'react-router-dom';
import BgImage from './Images/BgImage.jpg';
function App(){

     return(
      <>
      <div>
        <Routes>
          <Route path='/' element={<SignUp/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/Error' element={<Error/>}/>
          <Route path='/Home' element={<CustomerHome/>}/>
      </Routes>
      </div>
      </>
    )
     
  }

export default App;

