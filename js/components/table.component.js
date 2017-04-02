import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/index.action'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import Header from './header.component';
import ChannelLeft from './channel-left.component';
import ChannelRight from './channel-right.component';

import Fader from './fader.component';




const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 0,
    width: '80%',
    paddingBottom: 15,
    marginTop: 0,
    marginLeft: '10%',
    marginTop: 0,
  },
  crossfader: {
    height: 47,
    width: '60%',
    border: '1px solid #E3DEDB',
    backgroundColor: 'black',
    position: "absolute",
    bottom: 153,
    left: '20%',
    paddingTop: 0,
    paddingBottom: 30,
  },
  label: {
    display: 'flex',
    justifyContent: 'space-around',
    color: '#009ab2',
    backgroundColor: 'black',
    fontSize: '0.9em',
    margin: 'auto',
    marginBottom: 0,
  },
};


class Table extends Component {
  render() {
    return (
      <div className="container col-lg-10 col-lg-offset-1" id="table" >
        <ChannelLeft
          id="channelLeft"
          audioContext={this.props.audioContext}
          name="deck1"
          xFade={this.props.xFade}
          handleXFade={this.props.handleXFade}
          orientation="left"
          />
        <ChannelRight
          id="chennelRight"
          audioContext={this.props.audioContext}
          name="deck2"
          xFade={this.props.xFade}
          handleXFade={this.props.handleXFade}
          orientation="right"
          />
        <div className="container col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-6 col-xs-offset-3">
        <div
        className="crossfader-container"
        style={styles.crossfader}
        >
        <label htmlFor="crossfader" style={styles.label} className="crossfaderLabel">Crossfader</label>
          <MuiThemeProvider>
            <Fader
              id="crossfader"
              className="crossfader"
              min={0}
              max={1}
              onChange={(event, value) => this.props.handleXFade(value, this.props.deckNum)}
              defaultValue={this.props.xFade}
              value={this.props.xFade}
              axis="x"
              style={styles.root}
              />
          </MuiThemeProvider>
        </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
        xFade: state.decksReducer.both.xFade,
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      handleXFade: actions.handleXFade,
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);

