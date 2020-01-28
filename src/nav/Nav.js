import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import shoshPerfil from '../img/shosh_perfil.jpg';

class Nav extends Component {

    constructor(props) {
        super(props);


    }

    isActive(categoty) {
        let { itemToShow } = this.props
        return itemToShow == categoty ? " active" : "";
    }



    render() {

        let { updateState } = this.props
        return (
            <div >

                <nav className="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
                        aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
                        <ul className="navbar-nav mr-auto nav-flex-icons">
                            <li className="nav-item avatar">
                                <a className="nav-link p-0" href="#">
                                    <img src={shoshPerfil} className="rounded-circle z-depth-0"
                                        alt="shoshPerfil img" height="35" />
                                </a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className={"nav-item" + this.isActive(1)} onClick={() => updateState(1)} >
                                <a className="nav-link" href="#">צור קשר</a>
                            </li>

                            <li className={"nav-item" + this.isActive(2)} onClick={() => updateState(2)}>
                                <a className="nav-link" href="#">מי אנחנו</a>
                            </li>

                            <li className={"nav-item" + this.isActive(3)} onClick={() => updateState(3)}>
                                <a className="nav-link" href="#">תמונות
          <span className="sr-only">(current)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;




