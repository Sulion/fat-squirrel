import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.searchQuery = React.createRef();
    }

    state = {
        query: ""
    };

    onQueryChange = event => this.setState({
        query: event.target.value
    });

    onSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        this.props.onSubmitQuery(this.state.query);
    };

    render() {
        return (
            <div>
                <Form inline onSubmit={this.onSubmit}>
                    <FormControl
                        type="text"
                        placeholder="Место и блюдо"
                        className="mr-sm-2"
                        onChange={this.onQueryChange}
                        _ref={this.searchQuery}
                    />
                    <Button variant="outline-success" onClick={this.onSubmit} >Search</Button>
                </Form>
            </div>
        );
    }
}

export default SearchBar;
