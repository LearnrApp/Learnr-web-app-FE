import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../styles/Style.css'
import logo from '../../images/logo.svg'
import getCurrentUSer from '../Utils/AuthUtils'

const NavBar = () => {
  function userNav() {
    getCurrentUSer()
    if(getCurrentUSer().id) {
      console.log('it works')
      return <Nav.Link className="navlink" href="/students/dashboard/courses">Dashboard</Nav.Link>
    } else {
      return <>
        <Nav.Link className="navlink" href="/">Home</Nav.Link>
        <Nav.Link className="navlink" href="/about">About</Nav.Link>
        <Nav.Link className="navlink" href="/contact">Contact Us</Nav.Link>
        {/*<Nav.Link className="navlink" href="/pricing">Pricing</Nav.Link>*/}
        <Nav.Link className="navlink navlink--button-1" id="navlink--button-1" href="/students/signin">Login</Nav.Link>
        <Nav.Link className="navlink navlink--button-2" id="navlink--button-2" href="/students/signup">Sign Up</Nav.Link>
        {/*<NavDropdown className="navlink navlink--button-1 mx-auto px-3" title="Sign In" id="navlink--button-1">*/}
        {/*  <NavDropdown.Item className="navlink" href="/parents/signin">Parents</NavDropdown.Item>*/}
        {/*  <NavDropdown.Item className="navlink" href="/students/signin">Students</NavDropdown.Item>*/}
        {/*</NavDropdown>*/}
        {/*<NavDropdown className="navlink navlink--button-2 mx-auto mx-0 px-3" title="Sign Up" id="navlink--button-2">*/}
        {/*  <NavDropdown.Item className="navlink" href="/parents/signup">Parents</NavDropdown.Item>*/}
        {/*  <NavDropdown.Item className="navlink" href="/students/signup">Students</NavDropdown.Item>*/}
        {/*</NavDropdown>*/}
        {/* <Nav.Link className="navlink navlink--button-1 px-3" href="/signin">Sign In</Nav.Link>
        <Nav.Link className="navlink--button-2 text-white px-3" href="/signup">Sign Up</Nav.Link> */}
      </> 
    }
  }

  return (
    <div className="container-fluid bg-white fixed-top px-0 navbar-wrap">
      <Navbar className="container py-3" expand="lg">
        <Navbar.Brand href="/" ><img src={ logo } alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-collapse" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navlinks">
            { userNav() }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;