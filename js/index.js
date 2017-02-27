require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';

import Hello from './components/hello-world';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Hello greeting="Hello World" />, document.getElementById('app'))
);

