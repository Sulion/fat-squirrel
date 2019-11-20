import React, { useState } from 'react';
import SearchBar from './SearchBar';
import DishList from './DishList'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PlateNavbar from "./Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import * as mockData from './mock-data/data'

function App() {
  const [data, setData] = useState("");
  return (
      <React.Fragment>
        <PlateNavbar/>
        <Container className="main-container">
          <Row>
            <Col>
              <SearchBar onSubmitQuery={ data => setData(data) } />
            </Col>
          </Row>
          <Row>
            <Col>
              <DishList data={mockData.default}/>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
  );
}

export default App;