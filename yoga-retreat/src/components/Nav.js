import React from 'react';
import NavItem from './NavItem.js'

const Nav = () => {
    return (
        <div className="nav-content">
            <NavItem text="Services" />
            <NavItem text="Book Now" />
            <NavItem text="Location" />
            <NavItem text="Contact" />
        </div>
    );
};

export default Nav;