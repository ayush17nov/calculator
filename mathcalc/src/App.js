import React, { Component } from 'react';
import classes from './App.css';
import Calc from './containers/calc/Calc';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <h1>I'm React Calculator App</h1>
        <Calc/>
      </div>
    );
  }
}

export default App;
