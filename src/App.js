import React, { Component } from 'react';
import './App.css';
import Calendar from './components/Calendar';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Your Calendar</h1>
        </header>
        <Calendar myEventsList={[]} />
      </div>
    );
  }
}

export default App;
