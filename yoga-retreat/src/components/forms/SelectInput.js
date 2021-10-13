import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SelectInput = (props) => {

    // TODO: Create a state variable, isInvalid, and initialize to false
    const [isInvalid, setIsInvalid] = useState(false);

    const handleValueChange = (e) => {
        // TODO: Add logic for validation - isInvalid should be set to true if props.required is true AND:
        //      - the selected value is an empty string (i.e. nothing has been selected)
        if (props.required && e.target.value === "") {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }
        props.handleChange(e);
    };

    // TODO: Just after the props.label text inside the <label> tags, conditionally add an asterisk wrapped in the <sup> tags and give it the class "text-danger" based on whether props.required is true
    return (
        <div className="form-group">
            <select className={`form-select form-select-sm mt-3 ${isInvalid && "is-invalid"}`} id={props.id} style={props.width && { width: `${props.width}`}} onChange={handleValueChange} >
                <option value=""></option>
                {props.options.map((obj) => <option key={obj.value} value={obj.value}>{obj.option}</option>)}
            </select>
            <label className="small" id={`${props.id}-label`} htmlFor={props.id}>{props.label}{props.required && <sup className="text-danger">*</sup>}</label>
        </div>
    );
};

SelectInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired, // array of objects with value and option keys
    width: PropTypes.string, // eg: "200px" or "10rem"
    required: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
};

export default SelectInput;