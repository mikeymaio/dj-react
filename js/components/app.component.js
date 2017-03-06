import React from 'react';
import { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import Turntable from './turntable.component';
import Header from './header.component';

// import Turntable2 from './turntable2';

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
        <div className="row">
        <div className="container-fluid tt-mixer-container col-lg-6 col-lg-offset-0 col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0" style={styles.tt_mixer}>
          <Turntable />
        </div>
        </div>
      </div>
    );
  }
}
