'use strict';

import React                        from 'react';
import {Router, Route, IndexRoute}  from 'react-router';
import CreateHashHistory            from 'history/lib/createHashHistory';
import RouteActions                 from './actions/routeActions';

import App                          from './app';
import HomePage                     from './pages/home';
import PracticePage                 from './pages/practice';
import ProjectsPage                 from './pages/projects';
import ProjectPage                  from './pages/project';
import StudioPage                   from './pages/studio';
import MediaPage                    from './pages/media';
import ConnectPage                  from './pages/connect';
import ArticlePage                  from './pages/article';

import ReactGA   from 'react-ga';
ReactGA.initialize('UA-87772221-1');

let logPageView = ()=> {
    ReactGA.set({ page: window.location.hash });
    ReactGA.pageview(window.location.hash);
};

let onEnterPage = ()=>{
    RouteActions.change();
    window.scrollTo(0,0);
    logPageView();
};

export default (

    <Router history={CreateHashHistory({ queryKey: false })}>
        <Route path="/" component={App} >
            <IndexRoute component={HomePage} onEnter={onEnterPage}/>
            <Route path="/" name="home" component={HomePage} onEnter={onEnterPage}/>
            <Route path="practice" name="practice" component={PracticePage} onEnter={onEnterPage} />
            <Route path="projects" name="projects" component={ProjectsPage} onEnter={onEnterPage} />
            <Route path="project/:navigationTitle" name="project" component={ProjectPage} onEnter={onEnterPage} />
            <Route path="article/:navigationTitle" name="article" component={ArticlePage} onEnter={onEnterPage} />
            <Route path="*"  component={HomePage} onEnter={onEnterPage} />
        </Route>
    </Router>
);
