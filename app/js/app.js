'use strict';

import React              from 'react';

import StructureStore from './stores/structureStore';
import StructureActions from './actions/structureActions';
import TextStore from './stores/textStore';
import TextActions from './actions/textActions';
import Popup from './components/popup/popup';

const propTypes = {
    params: React.PropTypes.object,
    query: React.PropTypes.object,
    children: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.object
    ]),
    structure: React.PropTypes.object,
    text: React.PropTypes.object
};

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            structure: {},
            text: {}
        };

        this.onLoadStructure = this.onLoadStructure.bind(this);
        this.onLoadText = this.onLoadText.bind(this);

    }


    //----------- Actions Listeners ------------
    onLoadText(data) {
        this.setState({ text: data , error: null });
        StructureActions.load();
    }

    onLoadStructure(data) {
        this.setState({ structure: data , error: null });
    }


    //----------- Component mount states -------
    componentWillMount() {
        this.unsubscribeStructureStore = StructureStore.listen(this.onLoadStructure);
        this.unsubscribeTextStore = TextStore.listen(this.onLoadText);
        TextActions.load();
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        this.unsubscribeStructureStore();
        this.unsubscribeTextStore();
    }

    //--------------- Render -------------------
    renderChildren() {
        return React.cloneElement(this.props.children, {
            params: this.props.params,
            query: this.props.query,
            structure: this.state.structure,
            text: this.state.text
        });
    }

    render() {
        return (
            <div>
                <Popup />
                {this.renderChildren()}
            </div>
        );
    }

}

App.propTypes = propTypes;

export default App;
