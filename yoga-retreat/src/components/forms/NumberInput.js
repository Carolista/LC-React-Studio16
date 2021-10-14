import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NumberInput = (props) => {

    const [currValue, setCurrValue] = useState(Number(props.placeholder));
    // TODO: Create a state variable, isInvalid, and initialize to false
    

    const handleValueChange = (e) => {
        // TODO: Add logic for validation - isInvalid should be set to true if props.required is true AND:
        //      - the trimmed input value is an empty string
        //      - the input value is equal to the string "0"
        // It should be set back to false otherwise

        setCurrValue(Number(e.target.value));
        props.handleChange(e);
    };

    // TODO: Add the class "is-invalid" conditionally to the input if isInvalid is true
    // TODO: Just after the props.label text inside the <label> tags, conditionally add an asterisk wrapped in the <sup> tags and give it the class "text-danger" based on whether props.required is true
    return (
        <div className="form-group">
            <input className={`form-control form-control-sm mt-3 `} id={props.id} type="number" placeholder={props.placeholder} value={currValue} min={props.min || 0} style={props.width && { width: `${props.width}`}} onChange={handleValueChange} />
            <label className="small" id={`${props.id}-label`} htmlFor={props.id}>{props.label}</label>
        </div>
    );
};

NumberInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    min: PropTypes.number,
    width: PropTypes.string, // eg: "200px" or "10rem"
    required: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
};

export default NumberInput;