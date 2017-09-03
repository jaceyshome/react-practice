'use strict';

import _ from 'lodash';

const Helpers = {

    processObjectKeys(obj, convert) {
        let output;

        if (_.isDate(obj) || _.isRegExp(obj) || !_.isObject(obj)) {
            return obj;
        } else if (_.isArray(obj)) {
            output = _.map(obj, item => {
                return this.processObjectKeys(item, convert);
            });
        } else {
            output = {};
            _.forOwn(obj, (value, key) => {
                output[convert(key)] = this.processObjectKeys(obj[key], convert);
            });
        }

        return output;
    },

    /**
     * Strip the html tags from the html string, skip the case of undefined or null text
     * @param {String} text - The html string text
     * @returns {*}
     */
    stripHtml(text) {
        if(!text){
            return '';
        }
        return text.replace(/<(?:.|\n)*?>/gm, '');
    },

    /**
     * Generate a random string, default is the maximum 12 characters. The toString method of a number type
     * in javascript takes an optional parameter to convert the number into a given base. Similar to hex
     * (base 16), base 36 uses letters to represent digits beyond 9.
     * @see http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
     * @param {number} length - The length of the random string
     * @returns {string} - The random string , default is 12 length
     */
    random(length) {
        return Math.random().toString(36).substr(2, ( length && length <=12 ) ? length : 12);
    },

    getAnimationDelayByIndex(index) {
        if(index > 8){
            return index % 6 * 200;
        } else {
            return index * 200;
        }
    }

};

export default Helpers;
