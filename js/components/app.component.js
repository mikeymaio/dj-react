import React from 'react';
import { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';


import Header from './header.component';


const styles = {
  tt_mixer: {
    height: 432,
    // width: 500
  },
  container: {
    margin: 0,
    padding: 0
  }
}

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
