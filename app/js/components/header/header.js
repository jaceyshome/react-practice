'use strict';

import React from 'react';
import Logo from '../logo/logo';
import HeaderMenu from '../header-menu/header-menu';
import ScrollStore from '../../stores/scrollStore';

const propTypes = {
    className: React.PropTypes.string
};

const SCROLL_HEIGHT = 80;

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.unsubscribeRouteStore = null;
        this._handleScrollPosition = this._handleScrollPosition.bind(this);
        this.state = {
            stickEnable: false
        }
    }

    componentWillMount() {
        this.unsubscribeRouteStore = ScrollStore.listen(this._handleScrollPosition);
    }

    componentWillUnmount() {
        this.unsubscribeRouteStore();
    }

    _handleScrollPosition(data) {
        if(data.scrollPosition < SCROLL_HEIGHT) {
            this.setState({ stickEnable: false});
        } else {
            this.setState({ stickEnable: true});
        }
    }

    render() {

        return (
            <div className="b-container">
                <div className="b-container__wrapper">
                    <header className={`b-header b-container
                            ${this.props.className || ''}
                            ${this.state.stickEnable === true ? 'b-header--sticky' : ''} `}>
                        <div className="b-container__wrapper b-position__container">
                            <Logo className="animated fadeInLeft b-animate__duration--fast
                                             b-position__child b-position__child--left "/>
                            <HeaderMenu className="b-header__menu b-header-menu b-position__child
                                                    b-position__child--right"/>
                        </div>
                    </header>
                </div>
            </div>
        );

    }

}

Header.propTypes = propTypes;

export default Header;
