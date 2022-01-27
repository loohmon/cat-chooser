import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="main-div">
        <input 
            className="search-box"
            type='search' placeholder='search cats'
            onChange={searchChange} 
        />
        </div>
    )
}

export default SearchBox;