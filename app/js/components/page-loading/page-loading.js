'use strict';

import React                from 'react';
import TextStore            from '../../stores/textStore';
import TextActions          from '../../actions/textActions';
import _                    from 'lodash';
import Logo from '../logo/logo';

class PageLoading extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="b-page-loading">
                <div className="b-page-loading__logo-container">
                    <Logo className="animated fadeInLeft" />
                </div>
            </div>
        );
    }

}

export default PageLoading;
