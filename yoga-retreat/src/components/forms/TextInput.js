import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {

    // TODO: Create a state variable, isInvalid, and initialize to false
    

    const handleValueChange = (e) => {
        // TODO: Add logic for validation - isInvalid should be set to true if props.required is true AND:
        //      - the trimmed input value is an empty string, OR
        //      - the type is "email" and the trimmed value does NOT match the regex /^\S+@\S+\.\S+$/, OR
        //      - the type is "tel" and the trimmed value does NOT match the regex /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
        // It should be set back to false otherwise
        // BE RESOURCEFUL and find a way to match regex patterns if you haven't yet learned how!
        
        props.handleChange(e);
    };

    // TODO: Just after the props.label text inside the <label> tags, conditionally add an asterisk wrapped in the <sup> tags and give it the class "text-danger" based on whether props.required is true
    return (
        <div className="form-group">
            <input className={`form-control form-control-sm mt-3 ${isInvalid && "is-invalid"}`} id={props.id} type={props.type} placeholder={props.placeholder} style={props.width && { width: `${props.width}`}} onChange={handleValueChange} />
            <label className="small" id={`${props.id}-label`} htmlFor={props.id}>{props.label}</label>
        </div>
    );
};

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    width: PropTypes.string, // eg: "200px" or "10rem"
    required: PropTypes.bool,
    type: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default TextInput;