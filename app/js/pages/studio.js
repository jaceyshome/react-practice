'use strict';

import _                    from 'lodash';
import {Link}               from 'react-router';
import React                from 'react';
import Page                 from './page';

import DocumentTitle        from 'react-document-title';
import Footer               from '../components/footer/footer';
import Helpers              from '../utils/helpers';
import Header               from '../components/header/header';
import Introduction         from '../components/introduction/introduction';
import PageLoading          from '../components/page-loading/page-loading';
import TeamPanel        from '../components/team-panel/team-panel';
import TextStore            from '../stores/textStore';

const propTypes = {
    structure: React.PropTypes.object,
    text: React.PropTypes.object
};

class StudioPage extends Page {

    constructor(props) {
        super(props);
        this.pageKey = 'studio';
        this.nextPage = 'connect';
    }

    render() {
        if(_.isEmpty(this.props.structure) || _.isEmpty(this.props.text)) {
            return <PageLoading />;
        }

        return (
            <DocumentTitle title={this.getPageWindowTabTitle()}>
                <section className="b-page b-page--studio">

                    <Header className="b-header--white-log"/>

                    <div className="b-container b-box--orange-bg b-component--header-space
                                    b-animate b-animate__fade-in-down-big">
                        <div className="b-container__wrapper">

                            <Introduction title={this.getPanelTitle('introductionPanel')}
                                highlight={this.getPanelHighlight('introductionPanel')}
                                className="b-introduction--tight b-introduction--extra-right-space
                                           b-introduction--offset-top b-introduction--double-padding-bottom" />
                        </div>
                    </div>

                    <div className="b-container">
                        <div className="b-container__wrapper ">
                            <div className="b-box b-box--loose-left b-box--loose-right">
                                <Introduction bodyText={this.getPanelBodyText('descriptionPanel')}                                                              className="b-introduction--light b-introduction--tight
                                                b-introduction--top-no-space b-introduction--bottom-no-space
                                                b-introduction--offset-top b-text--color-dark-grey" />
                            </div>
                        </div>
                    </div>

                    <div className="b-container">
                        <div className="b-container__wrapper">
                            { React.createElement(TeamPanel, {
                                config: this.props.structure.pages[this.pageKey].teamMembersPanel,
                                className: "b-component"
                            })}
                        </div>
                    </div>

                    <Footer toPage={this.nextPage}/>

                </section>
            </DocumentTitle>
        );
    }


}

StudioPage.propTypes = propTypes;

export default StudioPage;
