'use strict';

import React from 'react';
import {Link}               from 'react-router';

const propTypes = {
    className: React.PropTypes.string
};

const Logo = (props) => {
    return (
        <Link to={`home`}
            className={`b-link b-logo ${props.className}`}></Link>
    );

};


Logo.propTypes = propTypes;

export default Logo;
