import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Setup from './Setup';
import Data from './Data';

class App extends Component {
  render() {
    return (
      <Router>
            <div className="container">

              <Route exact path="/" component={Setup} />

            </div>
          </Router>
    );
  }
}

export default App;
