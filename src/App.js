import React, { Component } from 'react';
import Gallery from './gallery/Gallery';
import Head from './head/Head';
import Nav from './nav/Nav';
import About from './about/About';
import Connect from './connect/Connect'
import PopUp from './Popup/PopUp'


import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = { itemToShow: 3, style: {}, url: "", showModal: false }
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }




  handleCloseModal() {
    this.setState({ showModal: false });
  }

  updateImgSize = (url) => {
    let newStyle = Object.assign({}, { width: "600px", height: "600px" })
    this.setState({ style: newStyle, url: url, showModal: true })


    console.log(this.state)

    // }

    // updateState = (compNum) => {
    //   console.log(compNum)
    //   this.setState({ itemToShow: compNum })
  }

  render() {
    let { itemToShow, url, style, showModal } = this.state
    return (
      <div className="App">
        <Nav updateState={this.updateState} itemToShow={itemToShow} />
        <Head />
        <PopUp url={url} style={style} handleCloseModal={this.handleCloseModal} showModal={showModal} />
        {itemToShow == 3 && <Gallery updateImgSize={this.updateImgSize} handleOpenModal={this.handleOpenModal} />}
        {itemToShow == 2 && <About />}
        {itemToShow == 1 && <Connect />}
      </div>
    )
  }
}


export default App;
