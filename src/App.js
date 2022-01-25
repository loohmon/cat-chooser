import React, { Component } from 'react';
import CatList from './CatList';
import { cats } from './cats';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            cats: cats,
            searchfield: '',
        }
}

onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value })
    }

    render() {
        const filteredCats = this.state.cats.filter(cat => {
            return cat.nickname.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <>
                <h1>Cat Chooser</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CatList cats={filteredCats}/>
            </>
        );
    }
}

export default App