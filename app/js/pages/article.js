'use strict';

import _                    from 'lodash';
import {Link}               from 'react-router';
import React                from 'react';
import Page                 from './page';
import DocumentTitle        from 'react-document-title';
import Helpers              from '../utils/helpers';
import ArticleComponent     from '../components/article-component/article-component';
import Carousel             from '../components/carousel/carousel';
import Footer               from '../components/footer/footer';
import Header               from '../components/header/header';
import Hero                 from '../components/hero/hero';
import Introduction         from '../components/introduction/introduction';
import PageLoading          from '../components/page-loading/page-loading';
import TextStore            from '../stores/textStore';

const propTypes = {
    structure: React.PropTypes.object,
    text: React.PropTypes.object
};

class ArticlePage extends Page {

    constructor(props) {
        super(props);
        this.nextPage = "media";
        this.pageConfig = null;
    }

    getConfig() {
        _.forEach(this.props.structure.pages.media.articleListPanel, (config) => {
            if(Helpers.stripHtml(TextStore.getText(config['navigationTitle'])) === this.props.params['navigationTitle']) {
                this.pageConfig = config;
                return;
            }
        });
        return null;
    }


    //------------------ render --------------------
    render() {
        if(_.isEmpty(this.props.structure) || _.isEmpty(this.props.text)) {
            return <PageLoading />;
        }

        this.getConfig();

        return (
            <DocumentTitle title={this.getPageWindowTabTitle()}>
                <section className={`b-page b-page--media`}>

                    <Header />

                    <div className="b-container b-animate b-animate__fade-in-down-big">
                        {React.createElement(Hero, {config: this.pageConfig.article.heroPanel })}
                    </div>

                    <div className="b-container">
                        <div className="b-container__wrapper b-container__wrapper--no-space">

                            <h2 className="b-title">
                                {Helpers.stripHtml(TextStore.getText(this.pageConfig.article.title))}
                            </h2>

                            {this.renderArticleBlock(this.pageConfig.article)}

                            <div className="clearfix"></div>

                            {React.createElement(Carousel, {
                                label: "Related articles",
                                toPage: "article",
                                config: this.props.structure.pages.media.articleListPanel,
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

    renderArticleBlock(article) {
        return _.map(article.body, (contentId)=> {
            return (
                <ArticleComponent
                    key={Helpers.random(8)}
                    titleId={article.title}
                    contentId={contentId}
                />
            );

        });

    }

}

ArticlePage.propTypes = propTypes;

export default ArticlePage;
