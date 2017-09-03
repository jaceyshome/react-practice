'use strict';

import React                from 'react';
import RedirectLink         from '../redirect-link/redirect-link';

import StructureStore       from '../../stores/structureStore';
import StructureActions     from '../../actions/structureActions';
import TextStore            from '../../stores/textStore';
import TextActions          from '../../actions/textActions';
import _                    from 'lodash';
import Helpers              from '../../utils/helpers';
import ContactDetails       from '../contact-details/contact-details';
import Logo                 from '../logo/logo';
import SocialShareGroup     from '../social-share-group/social-share-group';
import FeaturedLink         from '../featured-link/featured-link';

const propTypes = {
    toPage: React.PropTypes.string
};

//TODO: Footer class needs to do some cleaning
class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    //-------------------- render view -------------------
    render() {
        return (
            <div className="b-footer b-container">
                <div className="b-container__wrapper">

                    <div className="b-footer__top-container b-footer__column b-footer__column--left">
                        <div className="b-position__container">

                            <div className="b-footer__logo-container">
                                <Logo className="b-footer__logo b-logo--small"/>
                            </div>

                            <FeaturedLink
                                className="b-footer__featured-link b-position__child b-position__child--right b-position__child--bottom"
                                text={StructureStore.getPageNavigationTitle(this.props.toPage)}
                                navigationTitle={StructureStore.getPageNavigationTitle(this.props.toPage)}
                            />

                        </div>
                    </div>
                </div>

                <div className="b-footer__main-container b-box--tight-top b-box--loose-bottom">
                    <div className="b-container__wrapper b-footer__container-wrapper">

                        <div className="grid grid--center " >
                            <div className="b-footer__column b-footer__column--left grid__cell
                                            b-position__container b-component--tiny">
                                <div className="b-position__pull-left">
                                    <div className="b-list">
                                        {this.renderMenuList()}
                                    </div>
                                </div>
                                <div className="b-position__pull-right">
                                    <SocialShareGroup />
                                </div>
                            </div>

                            <div className="b-footer__column b-footer__column--right grid__cell">
                                <ContactDetails className="b-contact-details--footer" />
                            </div>
                        </div>

                        <div className="b-footer__copyright b-paragraph--tiny-space"
                             dangerouslySetInnerHTML={{__html: TextStore.getText(StructureStore.getFooterConfig().copyright)}}
                        />

                    </div>

                </div>
            </div>
        );
    }


    //-------------------- view partials  -------------------
    renderMenuList() {

        return _.map(StructureStore.listPageNavigationTitles(), (navigationTitle, key)=> {
            return (
                <li key={Helpers.random(8)} className="b-list__item b-footer__navigation-item" >
                    <RedirectLink to={navigationTitle} className="b-text b-text--upper b-text--color-dark b-link" >
                        <span className="b-link__text">{navigationTitle}</span>
                    </RedirectLink>
                </li>
            );
        });
    }

}

Footer.propTypes = propTypes;

export default Footer;
