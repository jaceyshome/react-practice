'use strict';

import APIUtils from './apiUtils';

const DataAPI = {

    loadText() {
        return APIUtils.getJSON('data/text.json');
    },

    loadStructure() {
        return APIUtils.getJSON('data/structure.json');
    }

};

export default DataAPI;
