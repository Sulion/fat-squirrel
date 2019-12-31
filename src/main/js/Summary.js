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
                    <tr>
                        <th width="58%">В тарелке</th>
                        <th width="14%">{sumBy(data.data, 'proteins')}</th>
                        <th width="14%">{sumBy(data.data, 'fats')}</th>
                        <th width="14%">{sumBy(data.data, 'carbs')}</th>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            <div className="stats">
                                <div style={{
                                    height: "100%",
                                    width: proteinPercentage + "%",
                                    "background-color": "#F67100"
                                }}>&nbsp;</div>
                                <div style={{
                                    height: "100%",
                                    width: (100 - proteinPercentage) + "%",
                                    "background-color": "#CFCFCF"
                                }}>&nbsp;</div>
                            </div>
                        </td>
                        <td>
                            <div className="stats">
                                <div style={{
                                    height: "100%",
                                    width: fatPercentage + "%",
                                    "background-color": "#3D43F7"
                                }}>&nbsp;</div>
                                <div style={{
                                    height: "100%",
                                    width: (100 - fatPercentage) + "%",
                                    "background-color": "#CFCFCF"
                                }}>&nbsp;</div>
                            </div>
                        </td>
                        <td>
                            <div className="stats">
                                <div style={{
                                    height: "100%",
                                    width: carbsPercentage + "%",
                                    "background-color": "#00B775"
                                }}>&nbsp;</div>
                                <div style={{
                                    height: "100%",
                                    width: 100 - carbsPercentage + "%",
                                    "background-color": "#CFCFCF"
                                }}>&nbsp;</div>
                            </div>
                        </td>
                    </tr>
                </Table>
            </Container>
        </React.Fragment>
    );
}

export default Summary;