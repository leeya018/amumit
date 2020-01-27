import React, { Component } from 'react';
import Body from './body/Body';
import Head from './head/Head';
import Nav from './nav/Nav';
import About from './about/About';
import Connect from './connect/Connect'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Head />
        {/* <Body /> */}
        {/* <About /> */}
        <Connect />
      </div>
    )
  }
}


export default App;
