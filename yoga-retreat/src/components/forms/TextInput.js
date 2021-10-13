import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {

    const [wasTouched, setWasTouched] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);

    const handleValueChange = (e) => {
        setWasTouched(true);
        if (props.required && e.target.value.trim() === "") {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }
        props.handleChange(e);
    };

    return (
        <div className="form-group">
            <input className={`form-control form-control-sm mt-3 ${isInvalid && "is-invalid"}`} id={props.id} type="text" placeholder={props.placeholder} style={props.width && { width: `${props.width}`}} onChange={handleValueChange} />
            <label className="small" id={`${props.id}-label`} htmlFor={props.id}>{props.label}{props.required && <sup className="text-danger">*</sup>}</label>
        </div>
    );
};

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    width: PropTypes.string, // eg: "200px" or "10rem"
    required: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
};

export default TextInput;