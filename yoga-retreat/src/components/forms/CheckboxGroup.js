import React from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from './Checkbox';

const CheckboxGroup = (props) => {

    const Checkboxes = () => props.options.map((obj) => {
        return (
            <CheckboxInput id={obj.value} label={obj.option} />
        );
    });

    return (
        <div className="form-group mt-3" id={props.id}>
            {props.prepend && <span className="space-right">{props.prepend}</span>}
            <Checkboxes />           
        </div>
    );
};

CheckboxGroup.propTypes = {
    id: PropTypes.string.isRequired,
    prepend: PropTypes.string,
    options: PropTypes.array.isRequired, // array of objects with value and option keys
};

export default CheckboxGroup;