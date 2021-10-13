import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RadioButtons = (props) => {

    const [selected, setSelected] = useState("");

    const handleValueChange = (e) => {
        setSelected(e.target.value);
        props.handleChange(e);
    }

    const Radios = () => props.options.map((obj) => {
        return (
            <div key={obj.value} className="form-check-inline">
                <input className="form-check-input mt-2" type="radio" name={props.id} id={obj.value} checked={selected === obj.value} onChange={handleValueChange} value={obj.value} />
                <label className="form-check-label" id={`${obj.value}-label`} htmlFor={obj.value}>{obj.option}</label>
            </div>
        );
    });

    return (
        <div className="form-group mt-3" id={props.id} value={selected}>
            {props.prepend && <span className="space-right">{props.prepend}{props.required && <sup className="text-danger">*</sup>}</span>}
            <Radios />      
        </div>
    );
};

RadioButtons.propTypes = {
    id: PropTypes.string.isRequired,
    prepend: PropTypes.string,
    options: PropTypes.array.isRequired, // array of objects with value and option keys
    required: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
};

export default RadioButtons;