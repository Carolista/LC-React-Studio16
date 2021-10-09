import React from 'react';
import '../App.css';

const NavItem = (props) => {
    return (
        <div className="nav-choice">
            <div className="nav-text-box">{props.text}</div>
        </div>
    );
};

export default NavItem;