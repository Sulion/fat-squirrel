import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import zoom from './search.svg'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
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
                <Form.Row className="main-search-form">
                    <Col>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <img src={zoom} className="magnifying-glass" alt="zoom"/>
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