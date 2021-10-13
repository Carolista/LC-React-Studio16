import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NumberInput = (props) => {

    const [currValue, setCurrValue] = useState(Number(props.placeholder));
    const [wasTouched, setWasTouched] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);

    const handleValueChange = (e) => {
        setWasTouched(true);
        if (props.required && (e.target.value === "" || e.target.value === "0")) {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }
        setCurrValue(Number(e.target.value));
        props.handleChange(e);
    };

    return (
        <div className="form-group">
            <input className={`form-control form-control-sm mt-3 ${isInvalid && "is-invalid"}`} id={props.id} type="number" placeholder={props.placeholder} value={currValue} min={props.min || 0} style={props.width && { width: `${props.width}`}} onChange={handleValueChange} />
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