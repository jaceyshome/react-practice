'use strict';

import Reflux               from 'reflux';

import ScrollAction          from '../actions/scrollAction';

const ScrollStore = Reflux.createStore({

    init() {
        this.listenTo(ScrollAction.scrollChange, this.scrollChange);
        this.lastKnownScrollPosition = 0;
        this.ticking = false;

        window.addEventListener('scroll', (e)=> {
            this.lastKnownScrollPosition = window.scrollY;
            if (!this.ticking) {
                window.requestAnimationFrame(()=> {
                    this.scrollChange(this.lastKnownScrollPosition);
                    this.ticking = false;
                });
            }
            this.ticking = true;
        });
    },


    throwError(err) {
        this.trigger(err);
    },

    scrollChange(scrollPosition) {
        this.trigger({
            action: "scrollChange",
            scrollPosition: scrollPosition
        });
    },

});

export default ScrollStore;
