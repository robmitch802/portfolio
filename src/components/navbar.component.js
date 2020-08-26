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
                            <img className="brandImage" src="https://drive.google.com/file/d/1VwAZ5OQ8JMmIYQKx3MZPO5LPEEf2xVuH/view?usp=sharing" alt="Rob in hat" /> &nbsp;
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="bg-light" >
                        <Nav className="mr-auto bg-light" >
                            <Link className="navLink bg-light" to="/about"><Nav.Link>About Me</Nav.Link></Link>
                            <Link className="navLink bg-light" to="/work"><Nav.Link>Work</Nav.Link></Link>
                            <Link className="navLink bg-light" to="/projects"><Nav.Link>Projects</Nav.Link></Link>
                            <Link className="navLink bg-light" to="/interests"><Nav.Link>Interests</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}