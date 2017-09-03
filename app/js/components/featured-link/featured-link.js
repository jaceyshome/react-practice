'use strict';

import React                from 'react';
import RedirectLink         from '../redirect-link/redirect-link';
import {Link}               from 'react-router';

const propTypes = {
    className: React.PropTypes.string,
    navigationTitle: React.PropTypes.string,
    text: React.PropTypes.string
};

const FeaturedLink = (props) => {

    return (
        <RedirectLink to={props.navigationTitle}
              className={`b-link b-link--featured b-text b-text--upper b-text--size-large ${props.className || ''} `}>
            <span className="b-link__text">{props.text}</span>
            <i className="b-link__icon b-icon b-icon--pointer-right b-icon--side-right b-icon--top-offset b-text--size-large"></i>
        </RedirectLink>
    );

};

FeaturedLink.propTypes = propTypes;

export default FeaturedLink;
