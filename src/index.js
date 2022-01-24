import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CatList from './CatList';
import { cats } from './cats.js';

ReactDOM.render(
    <CatList cats={cats}/>,
  document.getElementById('root')
);