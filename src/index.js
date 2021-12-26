import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './components/ui/Header.js';
import { BackSearch } from './components/ui/BackSearch.js';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BackSearch/>
  </React.StrictMode>,
  document.getElementById('root')
);


