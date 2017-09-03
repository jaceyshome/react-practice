'use strict';

import _                    from 'lodash';
import Reflux               from 'reflux';

import DataAPI              from '../utils/dataAPI';
import TextActions          from '../actions/textActions';

const TextStore = Reflux.createStore({

    init() {
        this.data = null;
        this.listenTo(TextActions.load, this.loadData);
    },

    setData(data) {
        this.data = data;
        this.trigger(this.data);
    },

    throwError(err) {
        this.trigger(err);
    },

    loadData() {
        DataAPI.loadText().then((data) => {
            this.setData(data);
        }).catch(err => {
            this.throwError(err);
        });
    },

    getText(key){
        if(!key){
            return '';
        }
        return this.data[key];
    }

});

export default TextStore;
