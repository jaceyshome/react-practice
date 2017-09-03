'use strict';

import _                    from 'lodash';
import {Link}               from 'react-router';
import React                from 'react';
import Page                 from './page';

import DocumentTitle        from 'react-document-title';
import FeaturedProjectList  from '../components/featured-project-list/featured-project-list';
import Footer               from '../components/footer/footer';
import Hero                 from '../components/hero/hero';
import Helpers              from '../utils/helpers';
import Header               from '../components/header/header';
import Introduction         from '../components/introduction/introduction';
import ImageIntroduction    from '../components/image-introduction/image-introduction';
import PageLoading          from '../components/page-loading/page-loading';
import FeaturedLink         from '../components/featured-link/featured-link';
import TextStore            from '../stores/textStore';
import Waypoint             from 'react-waypoint';

const propTypes = {
    structure: React.PropTypes.object,
    text: React.PropTypes.object
};

class PracticePage extends Page {

    constructor(props) {
        super(props);
        this.pageKey = 'practice';
        this.nextPage = 'studio';
        this.handleWayPointEnter = this.handleWayPointEnter.bind(this);
        this.state = {
            enteredWayPoint: false
        };
    }

    handleWayPointEnter(){
        if(this.state.enteredWayPoint === false){
            this.setState({
                enteredWayPoint: true
            });
        }
    }

    //-------------- render process -------------------

    render() {
        if(_.isEmpty(this.props.structure) || _.isEmpty(this.props.text)) {
            return <PageLoading />;
        }

        return (
            <DocumentTitle title={this.getPageWindowTabTitle()}>
                <section className="b-page b-page--practice">

                    <Header />

                    <div className="b-animate b-animate__fade-in-down-big">
                        {React.createElement(Hero, {config: this.props.structure.pages[this.pageKey].heroPanel })}
                    </div>

                    <div className="b-container">
                        <div className="b-container__wrapper grid grid--flush">

                            <div className="1/2--lap-and-up 1/2--desk grid__cell">
                                <div className="animated fadeInLeftBig
                                                b-animate__delay--1000ms b-animate__duration--fast">

                                    <Introduction title={this.getPanelTitle('introductionPanel')}
                                                  highlight={this.getPanelHighlight('introductionPanel')}
                                                  bodyText={this.getPanelBodyText('introductionPanel')}
                                                  className="b-bleed b-bleed--panel-left b-page--practice__introduction" />

                                </div>

                                <Waypoint
                                    topOffset={-250}
                                    scrollableAncestor={window}
                                    onEnter={this.handleWayPointEnter}
                                >
                                    <div className={`   'b-page--practice__image-holder '
                                                        ${this.state.enteredWayPoint === true ?
                                                        'animated fadeIn b-animate__duration--fast' :
                                                        'b-component--invisible' } `} >
                                        <img src="images/0.gif"
                                             className="b-image b-image--ratio-1-1 b-image--contain b-component"
                                             style={ { backgroundImage : `url(${this.props.structure.pages[this.pageKey].diagram})` } } />
                                    </div>
                                </Waypoint>

                            </div>

                            <div className="1/2--lap-and-up 1/2--desk grid__cell">
                                <ImageIntroduction image={this.getPanelImage('summaryPanel')}
                                                   title={this.getPanelTitle('summaryPanel')}
                                                   highlight={this.getPanelHighlight('summaryPanel')}
                                                   bodyText={this.getPanelBodyText('summaryPanel')}
                                />

                            </div>

                        </div>
                    </div>


                    <div className="b-container b-position__container">
                        <div className="b-container__wrapper b-page__bottom-link-holder ">

                            {React.createElement(FeaturedProjectList, {config: this.props.structure.pages[this.pageKey].projectListPanel })}

                            <FeaturedLink
                                className="b-link--featured b-page__bottom-link b-page__bottom-link--right"
                                text="view more projects"
                                navigationTitle={this.props.structure.pages.projects.navigationTitle}
                            />

                        </div>
                    </div>

                    <Footer toPage={this.nextPage}/>

                </section>
            </DocumentTitle>
        );
    }

}

PracticePage.propTypes = propTypes;

export default PracticePage;
