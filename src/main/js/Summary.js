import React from "react";
import Container from "react-bootstrap/Container";
import sumBy from "lodash/sumBy"
import Table from "react-bootstrap/Table";


function Summary(data) {
    const totalProteins = sumBy(data.data, 'proteins');
    const totalFats = sumBy(data.data, 'fats');
    const totalCarbs = sumBy(data.data, 'carbs');
    const eps = (window.innerWidth / 10.0 * 3.5) / (totalProteins + totalFats + totalCarbs);

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

                    {false &&
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            <svg width="100%" preserveAspectRatio="none">
                                <rect x="0" y="0" height="1vh" width={eps * totalProteins} fill="#F67100"/>
                                <rect x={eps * totalProteins} y="0" height="1vh" width={eps * totalProteins}
                                      fill="#555555"/>
                            </svg>
                        </td>
                        <td>
                            <svg width="100%" preserveAspectRatio="none">
                                <rect x="0" y="0" height="1vh" width={eps * totalFats} fill="#3D43F7"/>
                                <rect x={eps * totalFats} y="0" height="1vh" width={eps * totalFats} fill="#555555"/>
                            </svg>
                        </td>
                        <td>
                            <svg width="100%" preserveAspectRatio="none" viewBox="0 0 70 20" height="20px">
                                <rect x="0" y="0" height="1vh" width={eps * totalCarbs} fill="#00B775"/>
                                <rect x={eps * totalCarbs} y="0" height="1vh" width={eps * totalCarbs} fill="#555555"/>
                            </svg>
                        </td>
                    </tr>
                    }
                </Table>
            </Container>
        </React.Fragment>
    );
}

export default Summary;