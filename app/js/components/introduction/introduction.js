'use strict';

import React                from 'react';

const propTypes = {
    title: React.PropTypes.string,
    highlight: React.PropTypes.string,
    bodyText: React.PropTypes.string
};

const Introduction = (props)=> {

    return (

        <div className={`b-introduction b-component ${props.className || '' }`}>

            <div className="b-introduction__wrapper ">
                <h2 className="b-title b-title--h2 b-introduction__title
                               animated fadeIn b-animate__delay--1200ms"
                    dangerouslySetInnerHTML={{__html: props.title}}></h2>

                <div className="b-introduction__highlight b-text b-text--bold b-text--size-largest
                                animated fadeIn b-animate__delay--1400ms "
                     dangerouslySetInnerHTML={{__html: props.highlight}}></div>

                <div className="b-introduction__text b-text b-text--size-largest
                                animated fadeIn b-animate__delay--1600ms "
                     dangerouslySetInnerHTML={{__html: props.bodyText}}></div>
            </div>

        </div>
    );

};

Introduction.propTypes = propTypes;

export default Introduction;
