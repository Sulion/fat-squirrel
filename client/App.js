import React, { useState } from 'react';
import SearchBar from './SearchBar';
import DishList from './DishList'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [data, setData] = useState("");
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Here Be Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#restaurants">Рестораны</Nav.Link>
            <Nav.Link href="#about">О проекте </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <SearchBar onSubmitQuery={ data => setData(data) } />
          </Col>
        </Row>
        <Row>
          <Col>
            <DishList data={data}/>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default App;
