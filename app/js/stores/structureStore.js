'use strict';

import Reflux               from 'reflux';
import _                    from 'lodash';

import StructureActions     from '../actions/structureActions';
import DataAPI              from '../utils/dataAPI';

const StructureStore = Reflux.createStore({

    init() {
        this.data = null;
        this.listenTo(StructureActions.load, this.loadData);
    },

    setData(data) {
        this.data = data;
        this.trigger(this.data);
    },

    getData() {
        return this.data;
    },

    throwError(err) {
        this.trigger(err);
    },

    loadData() {
        DataAPI.loadStructure().then((data) => {
            this.setData(data);
        }).catch(err => {
            this.throwError(err);
        });
    },

    listPageNavigationTitles() {
        return _.map(this.data.pages, (page, key)=> {
            return page.navigationTitle;
        });
    },

    listProjects() {
        return StructureStore.getData().pages.projects.projectListPanel;
    },

    getPage(name) {
        return this.data.pages[name];
    },

    getPageNavigationTitle(name) {
        return this.getPage(name).navigationTitle;
    },

    getFooterConfig() {
        return StructureStore.getData().footer;
    },

    getSocialShareGroup() {
        return StructureStore.getData().socialShareGroup;
    }

});

export default StructureStore;
