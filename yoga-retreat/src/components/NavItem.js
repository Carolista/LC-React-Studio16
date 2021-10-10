import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <>
            {/* If a route is passed in, wrap with Link */}
            {props.link && <Link to={`/${props.link}`} className="text-link">
                <div className="nav-choice">
                    <div className="nav-text-box">
                        {props.text}
                    </div>
                </div>
            </Link>}
            {/* If no route is passed in - since this is a fake site */}
            {!props.link && <div className="nav-choice">
                <div className="nav-text-box">
                    {props.text}
                </div>
            </div>}
        </>
    );
};

export default NavItem;