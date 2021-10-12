import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
    return (
        <div className="form-group">
            <input class="form-control form-control-sm mt-3" id={props.id} type="text" placeholder={props.placeholder} style={props.width && { width: `${props.width}`}} />
            <label className="small" for={props.id}>{props.label}</label>
        </div>
    );
};

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    width: PropTypes.string, // eg: "200px" or "10rem"
};

export default TextInput;