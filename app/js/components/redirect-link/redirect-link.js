'use strict';

import React                from 'react';
import RouteActions         from '../../actions/routeActions';

const propTypes = {
    className: React.PropTypes.string,
    to: React.PropTypes.string,
};

const RedirectLink = (props) => {

    let onClickMenuItem = ()=> {

        let regex = /(^\#\/)|(^\/)/;
        if( location.hash.replace(regex, '') === props.to.replace(regex, '')) {
            RouteActions.cancelChange();
            return;
        }

        if( props.to.replace(regex, '').split("/")[0] === 'project' &&
            location.hash.replace(regex, '').split("/")[0] === 'project' ) {
            location.href = `#${props.to}`;
            RouteActions.beforeChangeProject();
        } else {
            location.href = `#${props.to}`;
        }

    };

    return (
        <a href="javascript:void(0);"  className={`${props.className || ''} `} onClick={onClickMenuItem} >
            {props.children}
        </a>
    );

};

RedirectLink.propTypes = propTypes;

export default RedirectLink;
