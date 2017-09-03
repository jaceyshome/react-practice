'use strict';

import _                    from 'lodash';
import {Link}               from 'react-router';
import React                from 'react';
import Page                 from './page';
import DocumentTitle        from 'react-document-title';
import Helpers              from '../utils/helpers';
import Carousel             from '../components/carousel/carousel';
import Footer               from '../components/footer/footer';
import Header               from '../components/header/header';
import Hero                 from '../components/hero/hero';
import Introduction         from '../components/introduction/introduction';
import PageLoading          from '../components/page-loading/page-loading';
import TextStore            from '../stores/textStore';
import RouteStore           from '../stores/routeStore';

const propTypes = {
    structure: React.PropTypes.object,
    text: React.PropTypes.object
};

class ProjectPage extends Page {

    constructor(props) {
        super(props);
        this.beforeRouteChange = this.beforeRouteChange.bind(this);
        this.pageKey = 'projectsList';
        this.nextPage = "studio";
        this.pageConfig = null;
        this.animationState = {
            carouselAnimation: "b-animate b-animate__fade-in-down-big",
            leftIntroductionAnimation: "animated fadeIn b-animate__duration--fast b-animate__delay--1200ms",
            rightIntroductionAnimationRight: "animated fadeIn b-animate__duration--fast b-animate__delay--1000ms"
        };
        this.state = _.assign({}, this.animationState);
    }

    getProjectConfig() {
        _.forEach(this.props.structure.projectsList, (config) => {
            if(Helpers.stripHtml(TextStore.getText(config['navigationTitle'])) === this.props.params['navigationTitle']) {
                this.pageConfig = config;
                return;
            }
        });
        return null;
    }

    componentWillMount() {
        this.unsubscribeRouteStore = RouteStore.listen(this.beforeRouteChange);
    }

    componentWillUnMount() {
        this.unsubscribeRouteStore();
    }

    beforeRouteChange(e) {
        if(e.action === "beforeChangeProject"){
            let state = _.assign({},this.state);
            this.setState({
                carouselAnimation: "",
                leftIntroductionAnimation: "",
                rightIntroductionAnimationRight: ""
            });
            this.setState(state);
        }

    }

    //------------------ render --------------------
    render() {
        if(_.isEmpty(this.props.structure) || _.isEmpty(this.props.text)) {
            return <PageLoading />;
        }

        //FIXME: this function shouldn't be called here
        this.getProjectConfig();

        return (
            <DocumentTitle title={this.getPageWindowTabTitle()}>
                <section className={`b-page b-page--project
                                    ${this.pageConfig.displayMode === 'smallHero' ?
                                        'b-page--project--sm-landing-mode' : '' } `}>

                    <Header className={`${this.pageConfig.displayMode === 'smallHero' ?
                                'b-header--sm-landing-mode' : '' }`}/>

                    <div className={`b-container ${this.state.carouselAnimation} `}>
                        <div className={`${this.pageConfig.displayMode === 'smallHero' ?
                                        'b-container__wrapper b-page--project__hero-wrapper' : '' }`}>
                            {React.createElement(Hero, {config: this.pageConfig.heroPanel })}
                        </div>
                    </div>

                    <div className="b-container">
                        <div className="b-container__wrapper b-container__wrapper--no-space">

                            <div className="grid grid--flush b-position__container">

                                <div className={`1/2--lap-and-up 1/2--desk grid__cell b-position__pull-right
                                                ${this.state.leftIntroductionAnimation} `}>
                                    <Introduction title={this.getPanelTitle('introductionPanel')}
                                        highlight={this.getPanelHighlight('introductionPanel')}
                                        bodyText={this.getPanelBodyText('introductionPanel')}
                                        className="b-introduction--light b-bleed b-bleed--panel-right b-bleed--light
                                                   b-page--project__introduction--right b-rich-text"
                                    />
                                </div>

                                <div className={`1/2--lap-and-up 1/2--desk grid__cell b-position__pull-left
                                                ${this.state.rightIntroductionAnimationRight} `}>
                                    <Introduction highlight={this.getPanelHighlight('textPanel')}
                                        bodyText={this.getPanelBodyText('textPanel')}
                                        className="b-page--project__introduction--left
                                                   b-introduction--light b-introduction--normal b-rich-text" />
                                </div>

                            </div>

                            <div className="clearfix"></div>

                            {React.createElement(Carousel, {
                                label: "Related projects",
                                toPage: "project",
                                config: this.props.structure.pages["projects"]["projectListPanel"],
                                className: 'b-project__carousel'
                            })}

                        </div>
                    </div>

                    <Footer toPage={this.nextPage}/>

                </section>
            </DocumentTitle>
        );
    }

    //------------------- helpers --------------------
    getPageWindowTabTitle() {
        if(this.pageConfig === null) {
            return "";
        }
        return _.startCase(Helpers.stripHtml(TextStore.getText(this.pageConfig.navigationTitle)));
    }

    getPanelTitle(panelName) {
        return Helpers.stripHtml(TextStore.getText(this.pageConfig[panelName].title));
    }

    getPanelHighlight(panelName) {
        return TextStore.getText(this.pageConfig[panelName].highlight);
    }

    getPanelBodyText(panelName) {
        return TextStore.getText(this.pageConfig[panelName].bodyText);
    }

}

ProjectPage.propTypes = propTypes;

export default ProjectPage;
