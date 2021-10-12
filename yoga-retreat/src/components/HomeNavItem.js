import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomeNavItem = (props) => {

    const Content = () => {
        return (
            <div className="nav-choice">
                <div className="nav-text-box">
                    {props.text}
                </div>
            </div>
        );
    };

    return (
        <>
            {/* If a route is passed in, wrap Content with Link */}
            {props.link && <Link to={`/${props.link}`} className="text-link"><Content /></Link>}
            {/* If no route is passed in (since this is a fake site) */}
            {!props.link && <Content />}
        </>
    );
};

HomeNavItem.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
};

export default HomeNavItem;