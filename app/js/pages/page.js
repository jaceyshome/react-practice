'use strict';

import React                from 'react';
import _                    from 'lodash';
import Helpers              from '../utils/helpers';
import TextStore            from '../stores/textStore';

const propTypes = {
    structure: React.PropTypes.object,
    text: React.PropTypes.object
};

class Page extends React.Component {

    constructor(props) {
        super(props);
    }

    //------------------------- helpers  -----------------------------
    getPageWindowTabTitle() {
        return _.startCase(this.props.structure.pages[this.pageKey].navigationTitle);
    }

    getPanelImage(panelName) {
        return this.props.structure.pages[this.pageKey][panelName].image;
    }

    getPanelTitle(panelName) {
        return Helpers.stripHtml(TextStore.getText(this.props.structure.pages[this.pageKey][panelName].title));
    }

    getPanelHighlight(panelName) {
        return TextStore.getText(this.props.structure.pages[this.pageKey][panelName].highlight);
    }

    getPanelBodyText(panelName) {
        return TextStore.getText(this.props.structure.pages[this.pageKey][panelName].bodyText);
    }

}

Page.propTypes = propTypes;

export default Page;
