import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar fixed="top" bg="light" variant="light" className="navContainer shadow p-3 mb-5 rounded" expand="md" collapseOnSelect="true" >
                    <Navbar.Brand className="bg-light" >
                        <Link to="/" className="link">
                            <img 
                                className="brandImage" 
                                width={29} 
                                src="../../img/apple-touch-icon-180x180.png" 
                                alt="Rob in hat" 
                            /> &nbsp;
                            <span className="d-sm-none">Rob Mitchell</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="bg-light" >
                        <Nav className="mr-auto bg-light" >
                            <Link className="nav-link body-text-20" to="/">About Me</Link>
                            <Link className="nav-link body-text-20" to="/work">Work</Link>
                            <Link className="nav-link body-text-20" to="/projects">Projects</Link>
                            <Link className="nav-link body-text-20" to="/interests">Interests</Link>
                            <Link className="nav-link body-text-20" to="/admin">Admin</Link>
                            <Link className="nav-link body-text-20" to="/login">Log In</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}