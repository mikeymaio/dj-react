import React from 'react';
import { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import Playlist from './playlist.container';
import Deck from './deck.container';
import Turntable from './turntable.component';
import Mixer from './mixer.component';
import FxContainer from './fx-container.component';
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
          <MuiThemeProvider>
            <Mixer className="col-lg-2 col-md-2 col-sm-2 col-xs-2"/>
          </MuiThemeProvider>
        </div>
        </div>
        <div className="container-fluid tt-mixer-container col-lg-6 col-lg-offset-0 col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0">
          <MuiThemeProvider>
            <FxContainer />
          </MuiThemeProvider>
        </div>
        <div className="container col-lg-8 col-lg-offset-1 col-md-2 col-md-offset-5 col-sm-2 col-sm-offset-4 col-xs-2 col-xs-offset-4">
          <MuiThemeProvider>
            <Playlist />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
