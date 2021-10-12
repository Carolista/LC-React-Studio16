import React from 'react';
import PropTypes from 'prop-types';

const RadioButtons = (props) => {

    const Radios = () => props.options.map((obj) => {
        return (
            <>
                <input class="form-check-input mt-2" type="radio" name={props.id} id={obj.value} value={obj.value} />
                <label class="form-check-label" for={obj.value}>{obj.option}</label>
            </>
        );
    });

    return (
        <div className="form-group mt-3" id={props.id}>
            <Radios />           
        </div>
    );
};

RadioButtons.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired, // array of objects with value and option keys
};

export default RadioButtons;