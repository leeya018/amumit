import React, { Component } from 'react';
import './index.css'
import view1 from '../img/view1.jpg';
import view2 from '../img/view2.jpg';
import view3 from '../img/view3.jpg';

class Gallery extends Component {

constructor(props){
    super(props)
    console.log(this.props.updateImgSize)
}
    render() {
        return (
            <div className="container">
                <div className="item item-1">
                    <img className="sub-item" src={view1} alt="view img"  onMouseEnter={()=>{}} onClick={()=>this.props.updateImgSize(view1)}/>
                    <span className="sub-item"> 212 NIS</span>
                </div>
                <div className="item item-2">
                    <img src={view2} alt="view img" onClick={()=>this.props.updateImgSize(view2)}/>
                    <span className="sub-item"> 100 NIS</span>


                </div>
                <div className="item item-3">
                    <img src={view3} alt="view img" />
                    <span className="sub-item"> 100 NIS</span>

                </div>
                <div className="item item-1">
                    <img src={view1} alt="view img" />
                    <span className="sub-item"> 124 NIS</span>

                </div>
                <div className="item item-2">
                    <img src={view2} alt="view img" />
                    <span className="sub-item"> 100 NIS</span>


                </div>
                <div className="item item-3">
                    <img src={view3} alt="view img" />
                    <span className="sub-item"> 44 NIS</span>

                </div>
                <div className="item item-1">
                    <img src={view1} alt="view img" />
                    <span className="sub-item"> 100 NIS</span>

                </div>
                <div className="item item-2">
                    <img src={view2} alt="view img" />
                    <span className="sub-item"> 333 NIS</span>


                </div>
                <div className="item item-3">
                    <img src={view3} alt="view img" />
                    <span className="sub-item"> 100 NIS</span>

                </div>

            </div>
        )
    }
}

export default Gallery;

