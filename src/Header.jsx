import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" className='pe-5 ps-5'>
      {/* <Container fluid> */}
        <Navbar.Brand href="#home">Personal Webpage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/gallery">Gallery</Link>
            <Link className='nav-link' to="/contact">Contact</Link>
            <Link className='nav-link' to="/contact">Portfolio</Link>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
    </div>
  )
}
