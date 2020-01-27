import React, { Component } from 'react';
import './index.css';
import facebookIcon from '../img/facebook_icon.jpg';
import instagramIcon from '../img/instagram_icon.jpg';
import gmailIcon from '../img/gmail_icon.jpg';





class Connect extends Component {
    render() {
        return (
            <div className="connect">
                <div className="row-icons">
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100000083464551">
                        <img className="icon" alt="Log in with Facebook" src={facebookIcon} />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/shosh.yavav">
                        <img className="icon" alt="Log in with instagram" src={instagramIcon} />
                    </a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100000083464551">
                        <img className="icon" alt="Log in with gmail" src={gmailIcon} />
                    </a>
                </div>
            </div>
        );
    }
}

export default Connect;

