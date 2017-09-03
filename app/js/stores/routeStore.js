'use strict';

import Reflux               from 'reflux';

import RouteActions         from '../actions/routeActions';

const RouteStore = Reflux.createStore({

    init() {
        this.listenTo(RouteActions.change, this.change);
        this.listenTo(RouteActions.beforeChange, this.beforeChange);
        this.listenTo(RouteActions.beforeChangeProject, this.beforeChangeProject);
        this.listenTo(RouteActions.cancelChange, this.cancelChange);
    },

    change() {
        this.trigger({
            action: "change"
        });
    },

    beforeChange() {
        this.trigger({
            action: "beforeChange"
        });
    },

    beforeChangeProject() {
        this.trigger({
            action: "beforeChangeProject"
        });
    },

    cancelChange() {
        this.trigger({
            action: "cancelChange"
        });
    },

});

export default RouteStore;
