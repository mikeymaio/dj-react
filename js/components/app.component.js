import React from 'react';
import { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import Header from './header.component';
import ChannelLeft from './channel-left.component';
import ChannelRight from './channel-right.component';
import Playlist from './playlist.container';

export default class App extends Component {
  render() {
    var audioContext1 = new AudioContext();
    var audioContext2 = new AudioContext();
    return (
      <div className="container col-lg-11 col-lg-offset-1">
        <ChannelLeft audioContext={audioContext1} name="deck1" orientation="left"/>
        <ChannelRight name="deck2" orientation="right"/>
        <div className="container col-lg-8 col-lg-offset-1 col-md-2 col-md-offset-5 col-sm-2 col-sm-offset-4 col-xs-2 col-xs-offset-4">
          <MuiThemeProvider>
            <Playlist />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
