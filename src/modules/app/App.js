import React, { Component } from 'react';
import './App.scss';
import { MyMain } from './components/MyMain/MyMain.js'

class MyHeader extends Component {
  render() {
    return (
      <header>
        <h1>HEADER</h1>
      </header>
    )
  }
}

class MyFooter extends Component {
  render() {
    return (
      <footer>
        <h1>FOOTER</h1>
      </footer>
    )
  }
}



// JSX
class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHeader />
        
        <MyMain />
        
        <MyFooter />
      </div>
    );
  }
}

export default App;
