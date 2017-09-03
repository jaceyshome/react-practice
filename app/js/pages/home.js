'use strict';

import _                    from 'lodash';
import React                from 'react';
import Page                 from './page';

import DocumentTitle        from 'react-document-title';
import FeaturedProjectList  from '../components/featured-project-list/featured-project-list';
import Footer               from '../components/footer/footer';
import Hero                 from '../components/hero/hero';
import Header               from '../components/header/header';
import Introduction         from '../components/introduction/introduction';
import PageLoading          from '../components/page-loading/page-loading';
import FeaturedLink         from '../components/featured-link/featured-link';

const propTypes = {
    structure: React.PropTypes.object,
    text: React.PropTypes.object
};

class HomePage extends Page {

    constructor(props) {
        super(props);
        this.pageKey = 'home';
        this.nextPage = 'practice';
    }

    render() {
        if(_.isEmpty(this.props.structure) || _.isEmpty(this.props.text)) {
            return <PageLoading />;
        }

        return (
            <DocumentTitle title={this.getPageWindowTabTitle()}>
                <section className="b-page b-page--home">

                    <Header />

                    <div className="b-animate b-animate__fade-in-down-big">
                        {React.createElement(Hero, {config: this.props.structure.pages[this.pageKey].heroPanel })}
                    </div>

                    <div className="b-container animated fadeInRightBig
                                    b-animate__delay--1000ms b-animate__duration--fast ">
                        <div className="b-container__wrapper">
                            <Introduction title={this.getPanelTitle('introductionPanel')}
                                  highlight={this.getPanelHighlight('introductionPanel')}
                                  bodyText={this.getPanelBodyText('introductionPanel')}
                                  className="b-bleed b-bleed--panel-right "/>
                        </div>
                    </div>

                    <div className="b-container">
                        <div className="b-container__wrapper b-page__bottom-link-holder">

                            {React.createElement(FeaturedProjectList, {config: this.props.structure.pages[this.pageKey].projectListPanel })}

                            <FeaturedLink
                                className="b-link--featured b-page__bottom-link"
                                text="view more projects"
                                navigationTitle={this.props.structure.pages.projects.navigationTitle}
                            />

                        </div>
                    </div>

                    <Footer toPage={this.nextPage} />

                </section>
            </DocumentTitle>
        );
    }


}

HomePage.propTypes = propTypes;

export default HomePage;
