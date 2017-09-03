'use strict';

import React                from 'react';
import _                    from 'lodash';
import Helpers              from '../../utils/helpers';
import StructureStore       from '../../stores/structureStore';
import TextStore            from '../../stores/textStore';

const propTypes = {
    className: React.PropTypes.string
};

const ContactDetails = (props)=> {

    return (

        <div className={`b-contact-details b-component--tiny ${props.className || '' }`}>

            { _.map(StructureStore.getFooterConfig().contactDetails, (detail)=> {
                return (
                    <div key={Helpers.random(8)} className="b-component--tiny b-paragraph--no-spacing">
                        <p>{Helpers.stripHtml(TextStore.getText(detail.location))}</p>
                        <div dangerouslySetInnerHTML={{__html: TextStore.getText(detail.details)}} />
                    </div>
                )
            })
            }

            <a href={`mailto: ${Helpers.stripHtml(TextStore.getText(StructureStore.getFooterConfig().contactEmail))}`}
               className="b-link" >
                <span className="b-text b-text--color-dark">E </span>
                    <span className="b-link__text b-text b-text--color-dark">
                         {Helpers.stripHtml(TextStore.getText(StructureStore.getFooterConfig().contactEmail))}
                    </span>
            </a>

        </div>
    );

};

ContactDetails.propTypes = propTypes;

export default ContactDetails;
