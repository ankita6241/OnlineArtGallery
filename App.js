import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Navigation/Header';
import Home from './Components/Home';
import About from './Components/About';
import AllProducts from './Components/AllProducts';
import CustomerLogin from './Components/CustomerLogin';
import AdminLogin from './Components/AdminLogin';
import Registration from './Components/Registration';
import Contact from './Components/Contact';
import FeedBack from './Components/FeedBack';
import {Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/>
       <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/AllProducts" element={<AllProducts/>}/>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/CustomerLogin" element={<CustomerLogin/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Feedback" element={<FeedBack/>}/>
       </Routes>
    </div>
  );
}

export default App;
