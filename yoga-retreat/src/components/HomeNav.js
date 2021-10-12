import React from 'react';
import HomeNavItem from './HomeNavItem'

const HomeNav = () => {
    return (
        <div className="nav-content">
            <HomeNavItem text="Spa"/>
            <HomeNavItem text="Studio"/>
            <HomeNavItem text="Book Now" link="book" />
            <HomeNavItem text="Contact"/>
        </div>
    );
};

export default HomeNav;