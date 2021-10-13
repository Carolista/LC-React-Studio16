import React from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = (props) => {

    return (
        <div className="form-check form-check-inline mt-1">
            <input class="form-check-input mt-2" type="checkbox" id={props.id} style={props.width && { width: `${props.width}`}} />
            <label class="form-check-label" for={props.id}>{props.label}</label>
        </div>
    );
};

CheckboxInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    width: PropTypes.string, // eg: "200px" or "10rem"
};

export default CheckboxInput;