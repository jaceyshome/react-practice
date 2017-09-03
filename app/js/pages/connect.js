'use strict';

import _                    from 'lodash';
import React                from 'react';
import Page                 from './page';

import ContactDetails       from '../components/contact-details/contact-details';
import DocumentTitle        from 'react-document-title';
import Footer               from '../components/footer/footer';
import Header               from '../components/header/header';
import Introduction         from '../components/introduction/introduction';
import Map                  from '../components/map/map';
import PageLoading          from '../components/page-loading/page-loading';


const propTypes = {
    structure: React.PropTypes.object,
    text: React.PropTypes.object
};

class ConnectPage extends Page {

    constructor(props) {
        super(props);
        this.pageKey = 'connect';
        this.nextPage = 'media';
    }

    render() {
        if (_.isEmpty(this.props.structure) || _.isEmpty(this.props.text)) {
            return <PageLoading />;
        }

        return (
            <DocumentTitle title={this.getPageWindowTabTitle()}>
                <section className="b-page b-page--connect">

                    <Header className="b-header--white-log"/>

                    <div className="b-container b-box--orange-bg b-component--header-space
                                    b-animate b-animate__fade-in-down-big ">
                        <div className="b-container__wrapper">

                            <Introduction title={this.getPanelTitle('introductionPanel')}
                                          highlight={this.getPanelHighlight('introductionPanel')}
                                          className="b-introduction--tight b-introduction--extra-right-space
                                            animated fadeIn b-animate__delay--800ms b-animate__duration--fast
                                            b-component--no-margin-bottom b-introduction--double-padding-bottom
                                            b-introduction--offset-top "/>
                        </div>
                    </div>

                    <div className="b-container b-component b-component--offset-top
                                    b-page--connect__body-panel">
                        <div className="b-container__wrapper b-page--connect__body-panel-inner">
                            <div className="grid grid--flush">
                                <div className="grid__cell b-box b-box--loose-top b-component
                                                animated fadeIn b-animate__delay--1400ms b-animate__duration--fast">
                                    <ContactDetails className="b-contact-details--connect-page"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer toPage={this.nextPage}/>

                </section>
            </DocumentTitle>
        );
    }

}

ConnectPage.propTypes = propTypes;

export default ConnectPage;
