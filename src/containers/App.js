import React, { Component } from 'react';
import CatList from '../components/CatList';
import { cats } from '../components/cats';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            cats: [],
            searchfield: '',
        }
}

componentDidMount() {
    this.setState({ cats: cats })
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
                <Scroll>
                <CatList cats={filteredCats}/>
                </Scroll>
            </>
        );
    }
}

export default App