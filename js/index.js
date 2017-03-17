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
    <div>
            <div className="row">
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>
        </div>
    <App />
    </div>
  </Provider>
  , document.getElementById('app'));
