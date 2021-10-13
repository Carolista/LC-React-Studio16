import React from 'react';
import PropTypes from 'prop-types';

const NumberInput = (props) => {
    return (
        <div className="form-group">
            <input class="form-control form-control-sm mt-3" id={props.id} type="number" placeholder={props.placeholder} min={props.min || 0} style={props.width && { width: `${props.width}`}} />
            <label className="small" for={props.id}>{props.label}</label>
        </div>
    );
};

NumberInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    min: PropTypes.number,
    width: PropTypes.string, // eg: "200px" or "10rem"
};

export default NumberInput;