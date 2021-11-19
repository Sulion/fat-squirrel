import React from "react";
import Container from "react-bootstrap/Container";
import sumBy from "lodash/sumBy"
import Table from "react-bootstrap/Table";

const PROTEINS = 70.0;
const CARBS = 300.0;
const FATS = 90.0;

function Summary(data) {
    const totalProteins = sumBy(data.data, 'proteins');
    const totalFats = sumBy(data.data, 'fats');
    const totalCarbs = sumBy(data.data, 'carbs');
    const proteinPercentage = 100 * totalProteins / PROTEINS;
    const fatPercentage = 100 * totalFats / FATS;
    const carbsPercentage = 100 * totalCarbs / CARBS;

    return (
        <React.Fragment>
            <Container className="summary">
                <Table className="table-fixed">
                    <thead>
                    <tr>
                        <td width="58%">В тарелке</td>
                        <td width="14%">{sumBy(data.data, 'proteins')}</td>
                        <td width="14%">{sumBy(data.data, 'fats')}</td>
                        <td width="14%">{sumBy(data.data, 'carbs')}</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            <div className="stats">
                                <div style={{
                                    height: "100%",
                                    width: proteinPercentage + "%",
                                    backgroundColor: "#F67100"
                                }}>&nbsp;</div>
                                <div style={{
                                    height: "100%",
                                    width: (100 - proteinPercentage) + "%",
                                    backgroundColor: "#CFCFCF"
                                }}>&nbsp;</div>
                            </div>
                        </td>
                        <td>
                            <div className="stats">
                                <div style={{
                                    height: "100%",
                                    width: fatPercentage + "%",
                                    backgroundColor: "#3D43F7"
                                }}>&nbsp;</div>
                                <div style={{
                                    height: "100%",
                                    width: (100 - fatPercentage) + "%",
                                    backgroundColor: "#CFCFCF"
                                }}>&nbsp;</div>
                            </div>
                        </td>
                        <td>
                            <div className="stats">
                                <div style={{
                                    height: "100%",
                                    width: carbsPercentage + "%",
                                    backgroundColor: "#00B775"
                                }}>&nbsp;</div>
                                <div style={{
                                    height: "100%",
                                    width: 100 - carbsPercentage + "%",
                                    backgroundColor: "#CFCFCF"
                                }}>&nbsp;</div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    );
}

export default Summary;