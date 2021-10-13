import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = (props) => {

    const [isChecked, setIsChecked] = useState(props.initialCheck || false);

    const handleValueChange = (e) => {
        setIsChecked(e.target.checked);
        props.handleChange(e);
    };

    return (
        <div className="form-check form-check-inline mt-1">
            <input className="form-check-input mt-2" type="checkbox" id={props.id} checked={isChecked} onChange={handleValueChange} style={props.width && { width: `${props.width}`}} />
            <label className="form-check-label" id={`${props.id}-label`} htmlFor={props.id}>{props.label}</label>
        </div>
    );
};

CheckboxInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    width: PropTypes.string, // eg: "200px" or "10rem"
    initialCheck: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
};

export default CheckboxInput;