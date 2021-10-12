import React from 'react';
import Proptypes from 'prop-types'
import { Link } from 'react-router-dom';

const Masthead = (props) => {
    return (
        <div className="masthead">
            <div className="masthead-content">
                <Link to="/home">
                    <img className="logo" src="assets/images/laguna-beach-logo.png" alt="Laguna Beach logo" width={props.width} />
                </Link>
            </div>
        </div>
    );
};

Masthead.propTypes = {
    width: Proptypes.string.isRequired, // e.g. "250px"
};

export default Masthead;