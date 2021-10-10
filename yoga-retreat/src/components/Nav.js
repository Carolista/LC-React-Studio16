import React from 'react';
import NavItem from './NavItem.js'

const Nav = () => {
    return (
        <div className="nav-content">
            <NavItem text="Spa"/>
            <NavItem text="Studio"/>
            <NavItem text="Book Now" link="book" />
            <NavItem text="Contact"/>
        </div>
    );
};

export default Nav;