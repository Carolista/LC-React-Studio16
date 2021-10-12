import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = (props) => {

    return (
        <div className="form-group">
            <select class="form-select form-select-sm mt-3" id={props.id} style={props.width && { width: `${props.width}`}}>
                <option value=""></option>
                {props.options.map((obj) => <option value={obj.value}>{obj.option}</option>)}
            </select>
            <label className="small" for={props.id}>{props.label}</label>
        </div>
    );
};

SelectInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired, // array of objects with value and option keys
    width: PropTypes.string, // eg: "200px" or "10rem"
};

export default SelectInput;