import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="masthead">
            <div className="masthead-content">
                <Link to="/home">
                    <img className="logo-home" src="assets/images/laguna-beach-logo.png" alt="Laguna Beach logo" width="250px" />
                </Link>
            </div>
        </div>
    );
};

export default Header;
