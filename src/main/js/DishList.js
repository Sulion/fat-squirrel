/* @jsx  */
import React from 'react';
import {Table} from 'react-bootstrap';
import map from 'lodash/map';

class DishList  extends React.Component {

    renderData(data) {
        return map(data, dish => {
            return (
                <tr>
                    <td>{dish.name}</td>
                    <td>{dish.proteins}</td>
                    <td>{dish.fats}</td>
                    <td>{dish.carbs}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <Table striped hover className="dish-list">
                <thead>
                <tr>
                    <th>Блюдо</th>
                    <th>Б</th>
                    <th>Ж</th>
                    <th>У</th>
                </tr>
                </thead>
                <tbody>
                {this.renderData(this.props.data)}
                </tbody>
            </Table>
        );
    };
}

export default DishList;