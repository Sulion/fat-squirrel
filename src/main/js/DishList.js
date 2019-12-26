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
            <Table hover className="dish-list">
                <thead>
                <tr>
                    <th>Блюдо</th>
                    <th>Калории</th>
                    <th>Белки</th>
                    <th>Жиры</th>
                    <th>Углеводы</th>
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