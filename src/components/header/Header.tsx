import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'


export function Header(props: { name: string }) {



    const Logout = async () => {
        await fetch(process.env.REACT_APP_BACK_URL + '/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        })
    }

    const onClickSubscription = async ()=>{
        console.log('sii')
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Services" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing">About Us</Nav.Link>
                        <Nav.Link><Link onClick={onClickSubscription} to={'/subscription'}>Subscription</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        {props.name ? (
                            <NavDropdown title={props.name} id="collapsible-nav-dropdown">
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={Logout}>
                                    <Link
                                        style={{textDecoration: 'none', color: 'inherit'}}
                                        to={'/login'}>
                                        Log out
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <>
                                <Nav.Link href="/register">Sign in</Nav.Link>
                                <Nav.Link href="/login">Sign up</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}