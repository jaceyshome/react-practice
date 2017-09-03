'use strict';

import React     from 'react';
import ReactDOM  from 'react-dom';

import Routes    from './routes';

if (process.env.NODE_ENV !== 'production') {
    // Enable React devtools
    window.React = React;
}

//FIXME: load Structure and Text first then Render the page
ReactDOM.render(Routes, document.getElementById('app'));
