import React, { Component } from 'react';
import Gallery from './gallery/Gallery';
import Head from './head/Head';
import Nav from './nav/Nav';
import About from './about/About';
import Connect from './connect/Connect'

import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = { itemToShow: 3 }
  }

  updateState = (compNum) => {
    console.log(compNum)

    this.setState({ itemToShow: compNum })
  }

  render() {
    let { itemToShow, gallery, about, connect } = this.state
    return (
      <div className="App">
        <Nav updateState={this.updateState} itemToShow={itemToShow} />
        <Head />
        {itemToShow == 3 && <Gallery />}
        {itemToShow == 2 && <About />}
        {itemToShow == 1 && <Connect />}
      </div>
    )
  }
}


export default App;
