'use strict';

import _                    from 'lodash';
import {Link}               from 'react-router';
import React                from 'react';
import Page                 from './page';

import DocumentTitle        from 'react-document-title';
import Footer               from '../components/footer/footer';
import Helpers              from '../utils/helpers';
import Header               from '../components/header/header';
import Gallery              from '../components/gallery/gallery';
import Introduction         from '../components/introduction/introduction';
import PageLoading          from '../components/page-loading/page-loading';
import TextStore            from '../stores/textStore';

const propTypes = {
    structure: React.PropTypes.object,
    text: React.PropTypes.object
};

class ProjectsPage extends Page {

    constructor(props) {
        super(props);
        this.pageKey = 'projects';
        this.nextPage = 'practice';
    }

    render() {
        if(_.isEmpty(this.props.structure) || _.isEmpty(this.props.text)) {
            return <PageLoading />;
        }

        return (
            <DocumentTitle title={this.getPageWindowTabTitle()}>
                <section className="b-page b-page--projects">

                    <Header className="b-header--white-log"/>

                    <div className="b-container b-box--orange-bg b-component--header-space
                                    b-animate b-animate__fade-in-down-big">
                        <div className="b-container__wrapper">

                            <Introduction title={this.getPanelTitle('introductionPanel')}
                                          highlight={this.getPanelHighlight('introductionPanel')}
                                          bodyText={this.getPanelBodyText('introductionPanel')}
                                          className="b-introduction--tight
                                                    b-introduction--extra-right-space
                                                    b-introduction--offset-top
                                                    b-introduction--double-padding-bottom"/>

                        </div>
                    </div>

                    <div className="b-container">
                        <div className="b-container__wrapper">

                            {React.createElement(Gallery, {
                                toPage: "project",
                                config: this.props.structure.pages[this.pageKey].projectListPanel,
                                className: "b-page--projects__gallery b-component"
                            })}

                        </div>
                    </div>

                    <Footer toPage={this.nextPage}/>

                </section>
            </DocumentTitle>
        );
    }


}

ProjectsPage.propTypes = propTypes;

export default ProjectsPage;
