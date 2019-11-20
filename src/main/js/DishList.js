/* @jsx  */
import React from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import map from 'lodash/map';

class DishList  extends React.Component {
    constructor() {
        super();
        this.state = { data: {} };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== null && nextProps.data !== undefined && nextProps.data !== '' && nextProps.data !== this.state.query;
    }

    componentWillUpdate(nextProps) {
        const query = nextProps.data;
        if (query === null || query === undefined || query === '')
            return;
        /*        axios.get(`/data/search?query=${encodeURIComponent(query)}`)
                     .then(res => {
                         this.setState({
                             data: res.data,
                             query: query
                         });
                     })
                     .catch(err => console.error(err));*/
    }

    renderData(data) {
        console.log(JSON.stringify(data))
        return map(data, dish => {
            return (
                <tr>
                    <td>{dish.dish}</td>
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