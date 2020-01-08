import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'

const Header = ({ branding }) => {
    return (
        <nav className="nav navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    {branding}
                </a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">
                               <i className="fas fa-home"></i> Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact/add' className="nav-link">
                               <i className="fas fa-plus"></i> Add Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className="nav-link">
                               <div className="fas fa-question"></div> About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Header.defaultProps = {
    branding: 'Contact Manager',
};

Header.propTypes = {
    branding: PropTypes.string,
};

export default Header;
