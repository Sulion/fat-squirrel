/* @jsx  */
import React from 'react';
import {Table} from 'react-bootstrap';
import map from 'lodash/map';

class DishList  extends React.Component {

    renderData(data) {
        return map(data, dish => {
            return (
                <tr key={dish.id.timestamp + dish.id.counter * 97}>
                    <td>{dish.name}</td>
                    <td>{dish.energy}</td>
                    <td>{dish.proteins}</td>
                    <td>{dish.fats}</td>
                    <td>{dish.carbs}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <Table hover className="dish-list table-fixed">
                <thead>
                <tr>
                    <th width="44%">Блюдо</th>
                    <th width="14%">Калории</th>
                    <th width="14%">Белки</th>
                    <th width="14%">Жиры</th>
                    <th width="14%">Углеводы</th>
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