'use strict';

import Reflux from 'reflux';


const RouteActions = Reflux.createActions([
    'change',
    'beforeChange',
    'beforeChangeProject',
    'cancelChange'
]);

export default RouteActions;
