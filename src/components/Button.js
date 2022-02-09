import PropTypes from 'prop-types';
import React from "react";

function Button({ color, text, onClick }) {
        
    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className='btn close'>
            {text}
        </button>
    );
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;