import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
export default function FishHeader(props) {







    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Nav.Link to="/home" as={NavLink}>Trade Simulator</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/home" as={NavLink} activeClassName="active">Home</Nav.Link>
                        {props.token.length > 0 ?
                        
                                <Nav.Link to="/Shop" as={NavLink} activeClassName="active">Trade</Nav.Link>
                               
                             :
                            <>
                                <Nav.Link to="/LogInForm" as={NavLink} activeClassName="active">Log In</Nav.Link>
                                <Nav.Link to="/RegisterForm" as={NavLink} activeClassName="active">Register</Nav.Link >
                            </>
                        }
                    </Nav>
                    {props.token.length > 0 && 
                    <>
                    <span className="navbar-text">
                                Hello, {props.userName}
                                </span>
                                <Nav.Link type="button" className="btn btn-secondary my-2 text-white " onClick={props.logoutUser}> Log Out </Nav.Link>
                     </>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};