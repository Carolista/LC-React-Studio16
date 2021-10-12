import React from 'react';
import PropTypes from 'prop-types';

const Note = (props) => {
    return (
        <p className="fst-italic mt-2 lh-sm text-muted small">{props.text}</p>
    );
};

Note.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Note;