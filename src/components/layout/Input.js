import React from 'react';
import PropTypes from 'prop-types';
const Input = ({ name, label, value, placeholder, type, error, onChange }) => {
    const classes = `form-control form-control-lg ${error ? 'is-invalid' : ''}`;
    console.log(error)
    return (
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <input
                onChange={onChange}
                name={name}
                id={name}
                type={type}
                className={classes}
                placeholder={placeholder}
                value={value}
            />

            {error && <div className='invalid-feedback'> {error} </div>}
        </div>
    );
};

Input.defaultProps = {
    type: 'text',
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Input;
