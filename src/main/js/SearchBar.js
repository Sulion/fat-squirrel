import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import zoom from './search.svg'

class SearchBar extends React.Component {
    constructor() {
        super();
        this.searchQuery = React.createRef();

        this.state = {
            query: ""
        };
    }

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
            <Form inline onSubmit={this.onSubmit}>
                <Form.Row className="w-100 main-search-form">
                    <Col md={{span: 8, offset: 2}}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <img src={zoom} className="magnifying-glass"/>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Введите ваш ресторан, а затем блюдо"
                                size="lg"
                                onChange={this.onQueryChange}
                                _ref={this.searchQuery}
                            />
                        </InputGroup>
                    </Col>
                </Form.Row>
            </Form>
        );
    }
}

export default SearchBar;