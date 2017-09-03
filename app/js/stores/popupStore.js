'use strict';

import Reflux               from 'reflux';

import PopupActions          from '../actions/popupActions';

const PopupStore = Reflux.createStore({

    init() {
        this.data = null;
        this.listenTo(PopupActions.show, this.show);
        this.listenTo(PopupActions.hide, this.hide);
    },

    throwError(err) {
        this.trigger(err);
    },

    show(data) {
        this.trigger({
            action: "show",
            data: data
        });
    },

    hide() {

    }

});

export default PopupStore;
