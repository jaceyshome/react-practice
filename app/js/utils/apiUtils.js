'use strict';

import request from 'superagent';
import {camel} from 'change-case';
import helpers from './helpers';

const APIUtils = {

    root: './',

    get(path) {
        return new Promise((resolve, reject) => {
            request.get(this.root + path)
                .withCredentials()
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err || res);
                    } else {
                        resolve(res);
                    }
                });
        });
    },

    getJSON(path) {
        return new Promise((resolve, reject) => {
            request.get(this.root + path)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .withCredentials()
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err || res);
                    } else {
                        resolve(res.body);
                    }
                });
        });
    },

    post(path, body) {
        return new Promise((resolve, reject) => {
            request.post(this.root + path, body)
                .withCredentials()
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err || res);
                    } else {
                        reject(res);
                    }
                });
        });
    },

    patch(path, body) {
        return new Promise((resolve, reject) => {
            request.patch(this.root + path, body)
                .withCredentials()
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err || res);
                    } else {
                        reject(res);
                    }
                });
        });
    },

    put(path, body) {
        return new Promise((resolve, reject) => {
            request.put(this.root + path, body)
                .withCredentials()
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err || res);
                    } else {
                        reject(res);
                    }
                });
        });
    },

    del(path) {
        return new Promise((resolve, reject) => {
            request.del(this.root + path)
                .withCredentials()
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err || res);
                    } else {
                        reject(res);
                    }
                });
        });
    }

};

export default APIUtils;
