import React, {Component} from "react";
import {Nav, Navbar} from 'react-bootstrap';
import './App.css';
import logo from './logo.svg'

class PlateNavbar extends Component {
    render() {
        const isPhone = this.state && this.state.isPhone;
        return (
            <Navbar bg="white" expand="lg" collapseOnSelect sticky={'top'} className="ribbon">
                <Navbar.Brand>
                    <img src={logo} className="App-logo-img"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="mr-auto">
                    <Nav className="ml-auto">
                        <Nav.Item className="navbar-menu">
                            <Nav.Link eventKey="monitoring"><span className="menu-text">Рестораны</span></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="navbar-menu">
                            <Nav.Link eventKey="complaint"><span className="menu-text">О проекте</span></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="navbar-menu">
                            <Nav.Link eventKey="about"><span className="menu-text">Контакты</span></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default PlateNavbar;
