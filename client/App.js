import React, { useState } from 'react';
import SearchBar from './SearchBar';
import DishList from './DishList'

const App = (props) =>{
    const [data, setData] = useState("");
    return (
        <React.Fragment>
            <SearchBar onSubmitQuery={data => setData(data)} />
            <DishList data={data}/>
        </React.Fragment>
    );
};

export default App;
