import React from "react";
import {Nav,Navbar,Container, NavDropdown} from 'react-bootstrap';
const Header=()=>{
    return(
            <>
        <div className=" p-3 mb-2 bg-white ">
       <div className="page-header">
           <h1 className="text-dark" style={{textAlign:"center"}}>ONLINE ART GALLERY</h1>
       </div>
       </div>
       <Navbar collapseOnSelect  expand='md' bg='danger' variant='dark'>
        <Container>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav>
                    <Nav.Link href='/' style={{color:"white"}}>Home</Nav.Link>
                    <Nav.Link href='/About'style={{color:"white"}}>About</Nav.Link>
                    <Nav.Link href='/AllProducts' style={{color:"white"}}>All Products</Nav.Link>
                    <NavDropdown title="Login" id='basic-nav-dropdown'>
                        <NavDropdown.Item href="/AdminLogin"style={{color:"red"}}>Admin Login</NavDropdown.Item>
                        <NavDropdown.Item href="/CustomerLogin"style={{color:"red"}}>Customer Login</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='/Registration'style={{color:"white"}}>Registration</Nav.Link>
                    <Nav.Link href='/Contact'style={{color:"white"}}>Contact</Nav.Link>
                    <Nav.Link href='/Feedback'style={{color:"white"}}>Feedback</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
       </Navbar>
      </>        
    );
};

export default Header;