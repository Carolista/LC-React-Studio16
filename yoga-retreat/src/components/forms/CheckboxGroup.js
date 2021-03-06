import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from './CheckboxInput';

const CheckboxGroup = (props) => {

    const [selections, setSelections] = useState([]);

    const handleSelectionChange = (e) => {
        let currSelections = selections;
        if (e.target.checked && !selections.includes(e.target.id)) {
            currSelections.push(e.target.id);
            setSelections(currSelections);
        } else if (!e.target.checked && selections.includes(e.target.id)) {
            currSelections.splice(currSelections.indexOf(e.target.id), 1);
            setSelections(currSelections);
        }
        props.handleChange(currSelections);
    };

    const Checkboxes = () => props.options.map((obj) => {
        return (
            <CheckboxInput key={obj.value} id={obj.value} label={obj.option} handleChange={handleSelectionChange} />
        );
    });

    return (
        <div className="form-group mt-3" id={props.id} value={selections}>
            {props.prepend && <span className="fw-bold space-right">{props.prepend}</span>}
            <Checkboxes />           
        </div>
    );
};

CheckboxGroup.propTypes = {
    id: PropTypes.string.isRequired,
    prepend: PropTypes.string,
    options: PropTypes.array.isRequired, // array of objects with value and option keys
    handleChange: PropTypes.func.isRequired,
};

export default CheckboxGroup;