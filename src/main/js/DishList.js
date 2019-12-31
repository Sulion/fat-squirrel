/* @jsx  */
import React from 'react';
import {Table} from 'react-bootstrap';
import map from 'lodash/map';
import find from 'lodash/find';
import filter from 'lodash/filter';
import Summary from "./Summary";

class DishList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    transformId(data) {
        return map(data, dish => Object.assign({}, dish, {id: dish.id.timestamp + dish.id.counter * 97}));
    }

    toggleDish(dish) {
        let chosenDishes = [];
        if (this.state.chosen) {
            if (find(this.state.chosen, {id: dish.id})) {
                chosenDishes = filter(this.state.chosen, cd => cd.id !== dish.id);
            } else {
                chosenDishes = this.state.chosen.slice();
                chosenDishes.push(dish);
            }
        } else {
            chosenDishes = [dish]
        }
        this.setState({chosen: chosenDishes});
    }

    renderData(data, className) {
        return map(data, dish => {
            return (
                <tr key={dish.id} onClick={() => this.toggleDish(dish)} className={className}>
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
            <React.Fragment>
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
                    {this.renderData(this.state.chosen, "greyed-rows")}
                    {this.renderData(this.transformId(this.props.data), "")}
                    </tbody>
                </Table>
                <Summary data={this.state.chosen}/>
            </React.Fragment>
        );
    };
}

export default DishList;