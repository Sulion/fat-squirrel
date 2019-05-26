import React from 'react';
import SearchBar from './SearchBar';
import ThemeSwitcher from './ThemeSwitcher';
const onSubmitQuery = (event) => alert(JSON.stringify(event));
const App = (props) => (
    <React.Fragment>
        <h1>Hello, {props.name}!</h1>
        <SearchBar onSubmitQuery={onSubmitQuery} />
    </React.Fragment>
);

export default App;
