'use strict';

import React                from 'react';
import StructureStore       from '../../stores/structureStore';

const propTypes = {
    className: React.PropTypes.string
};

const SocialShareGroup = (props)=> {

    return (

        <div className={`b-social-share-group ${props.className || '' }`}>

            <a href={StructureStore.getSocialShareGroup().facebook.link}
               className="b-link b-text--color-white">
                <i className="b-social-share-icon b-image b-social-share-icon--facebook"></i>
                <span className="sr-only">Facebook</span>
            </a>
            <a href={StructureStore.getSocialShareGroup().linkedin.link}
               className="b-link b-text--color-white">
                <i className="b-social-share-icon b-image b-social-share-icon--linkedin"></i>
                <span className="sr-only">Linkedin</span>
            </a>
            <a href={StructureStore.getSocialShareGroup().twitter.link}
               className="b-link b-text--color-white">
                <i className="b-social-share-icon b-image b-social-share-icon--twitter"></i>
                <span className="sr-only">Twitter</span>
            </a>

        </div>
    );

};

SocialShareGroup.propTypes = propTypes;

export default SocialShareGroup;
