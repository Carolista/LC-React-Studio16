import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {

    const [wasTouched, setWasTouched] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);

    const handleValueChange = (e) => {
        setWasTouched(true);
        if (props.required && e.target.value.trim() === "") {
            setIsInvalid(true);
        } else if (props.type == "email" && !e.target.value.trim().match(/^\S+@\S+\.\S+$/)) {
            setIsInvalid(true);
        } else if (props.type == "tel" && !e.target.value.trim().match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/)) {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }
        props.handleChange(e);
    };

    return (
        <div className="form-group">
            <input className={`form-control form-control-sm mt-3 ${isInvalid && "is-invalid"}`} id={props.id} type={props.type} placeholder={props.placeholder} style={props.width && { width: `${props.width}`}} onChange={handleValueChange} />
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
    type: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default TextInput;