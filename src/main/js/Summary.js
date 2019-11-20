import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sumBy from "lodash/sumBy"


function Summary(data) {
    return (
        <React.Fragment>
            <Container className="summary">
                <Row>
                    <Col className="col-7">В тарелке</Col>
                    <Col className="col-sm-2">{sumBy(data.data, 'proteins')}</Col>
                    <Col className="col-sm-2">{sumBy(data.data, 'fats')}</Col>
                    <Col className="col-sm-1">{sumBy(data.data, 'carbs')}</Col>
                </Row>
                <Row>
                    <Col className="col-7">&nbsp;</Col>
                    <Col><hr/></Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Summary;