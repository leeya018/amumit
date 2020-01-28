import React from 'react';
import ReactModal from 'react-modal';
// import style from './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import view1 from '../img/view1.jpg';
import './index.css'
class PopUp extends React.Component {

  constructor(props) {
    super(props);


  }


  render() {

    return (
      <div>

        <ReactModal
          className="modal"
          isOpen={this.props.showModal}
          contentLabel="Minimal Modal Example"
        >
          <div>
            <button onClick={this.props.handleCloseModal}>X</button>
            <img className="sub-item" src={this.props.url} alt="view img" style={this.props.style} />
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default PopUp;

