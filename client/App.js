import React, { useState } from 'react';
import SearchBar from './SearchBar';
import DishList from './DishList'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Nav';

const App = (props) =>{
  const [data, setData] = useState("");
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Fat Squirrel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#restaurants">Рестораны</Nav.Link>
            <Nav.Link href="#about">О проекте</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <SearchBar onSubmitQuery={data => setData(data)} />
      <DishList data={data}/>
    </React.Fragment>
  );
};

export default App;
