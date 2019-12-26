import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import DishList from './DishList'
import PlateNavbar from "./PlateNavbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import Summary from "./Summary";
import axios from "axios";

const URL_BASE = process.env.REACT_APP_BACKEND_URL;

function App() {
    const [data, setData] = useState("");
    const [dishes, setDishes] = useState([]);
    useEffect(
        () => {
            axios.get(`${URL_BASE}/data/search?query=${encodeURIComponent(data)}`)
                .then(res => setDishes(res.data))
                .catch(err => console.error(err))
        },
        [data]
    );

    return (
        <React.Fragment>
            <PlateNavbar/>
            <Container className="main-container">
                <Row className="justify-content-center">
                    <Col>
                        <SearchBar onSubmitQuery={data => setData(data)}/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <DishList data={dishes}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Summary data={dishes}/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default App;