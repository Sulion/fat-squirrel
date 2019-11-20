import React, {useState} from 'react';
import SearchBar from './SearchBar';
import DishList from './DishList'
import PlateNavbar from "./PlateNavbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import * as mockData from './mock-data/data'
import Summary from "./Summary";

function App() {
    const [data, setData] = useState("");
    return (
        <React.Fragment>
            <PlateNavbar/>
            <Container className="main-container">
                <Row>
                    <Col>
                        <SearchBar onSubmitQuery={data => setData(data)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DishList data={mockData.default}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Summary data={mockData.default}/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default App;