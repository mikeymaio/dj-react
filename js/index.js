import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/app.component';

import Header from './components/header.component';
import store from './store';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
    <App />
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('app'));
