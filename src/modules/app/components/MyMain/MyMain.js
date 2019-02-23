import React, { Component } from 'react';
import './MyMain.scss'
import { helperFn } from './utils/helperFn'

class MyMain extends Component {
  render() {
  	helperFn()

    return (
      <main className="main">
        <h1>MAIN CONTENT</h1>
      </main>
    )
  }
}

export { MyMain }