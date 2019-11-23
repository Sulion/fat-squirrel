import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sumBy from "lodash/sumBy"


function Summary(data) {
    const totalProteins = sumBy(data.data, 'proteins');
    const totalFats = sumBy(data.data, 'fats');
    const totalCarbs = sumBy(data.data, 'carbs');
    const eps = (window.innerWidth / 10.0 * 3.5) / (totalProteins + totalFats + totalCarbs);

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
                    <Col className="col-sm-5">
                        <svg width="35vw">
                            <rect x="0" y="0" height="1vh" width={eps * totalProteins} fill="#F67100"/>
                            <rect x={eps * totalProteins} y="0" height="1vh" width={eps * totalFats}
                                  fill="#3D43F7"/>
                            <rect x={eps * (totalProteins + totalFats)} y="0" height="1vh"
                                  width={eps * totalCarbs} fill="#00B775"/>
                        </svg>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Summary;