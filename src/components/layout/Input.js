import React from 'react';
import PropTypes from 'prop-types';
const Input = ({ name, label, value, placeholder, type, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={label}>Name</label>
            <input
                onChange={onChange}
                name={name}
                id={name}
                type={type}
                className="form-control form-control-lg"
                placeholder={placeholder}
                value={value}
            />
        </div>
    );
};

Input.defaultProps = {
    type : 'text'
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Input;
