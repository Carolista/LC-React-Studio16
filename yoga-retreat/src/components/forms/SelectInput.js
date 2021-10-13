import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SelectInput = (props) => {

    const [wasTouched, setWasTouched] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);

    const handleValueChange = (e) => {
        setWasTouched(true);
        if (props.required && e.target.value === "") {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }
        props.handleChange(e);
    };

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