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
import Playlist from './playlist.container';

import Fader from './fader.component';
import Snackbar from 'material-ui/Snackbar';


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    //backgroundColor: 'black',
    height: 0,
    width: '80%',
    paddingBottom: 15,
    marginTop: 0,
    // marginLeft: 25,
    marginLeft: '10%',
    marginTop: 0
        // marginLeft: '0%',
    // width: '100%',
  },
  crossfader: {
    height: 50,
    // width: 276,
    width: '60%',
    border: '1px solid #E3DEDB',
    backgroundColor: 'black',
    position: "absolute",
    // bottom: '15000%',
    bottom: 150,
    //left: '31.25%',
    left: '20%',
    paddingTop: 0,
    paddingBottom: 30,
  },
  label: {
    display: 'flex',
    justifyContent: 'space-around',
    color: '#009ab2',
    backgroundColor: 'black',
    fontSize: '1em',
    margin: 'auto',
    marginBottom: 0,
    // padding: 5,
  },
};


class Table extends Component {
  render() {
    //var audioContext1 = new AudioContext();
    // var audioContext2 = new AudioContext();
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
          {/*<MuiThemeProvider>
            <Playlist />
          </MuiThemeProvider>*/}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
        xFade: state.decksReducer.both.xFade,
        // song: state.decksReducer.deck1.activeSong,
        // play: state.decksReducer.deck1.play,
        // speed: state.decksReducer.deck1.speed,
        // volume: state.decksReducer.deck1.volume,
        // treble: state.decksReducer.deck1.treble,
        // mid: state.decksReducer.deck1.mid,
        // bass: state.decksReducer.deck1.bass,
        // //lpFilterBypass: state.decksReducer.deck1.lpFilterBypass,
        // lpFilterCutoff: state.decksReducer.deck1.lpFilterCutoff,
        // lpFilterRes: state.decksReducer.deck1.lpFilterRes,
        // //hpFilterBypass: state.decksReducer.deck1.hpFilterBypass,
        // hpFilterCutoff: state.decksReducer.deck1.hpFilterCutoff,
        // hpFilterRes: state.decksReducer.deck1.hpFilterRes,
        // //reverbBypass: state.decksReducer.deck1.reverbBypass,
        // reverbMix: state.decksReducer.deck1.reverbMix,
        // delay: state.decksReducer.deck1.delay,
        // distortion: state.decksReducer.deck1.distortion,
        // bitCrusherBypass: state.decksReducer.deck1.bitCrusherBypass,
        // bits: state.decksReducer.deck1.bits,
        // normFreq: state.decksReducer.deck1.normFreq,
        // bufferSize: state.decksReducer.deck1.bufferSize,
        // //delayBypass: state.decksReducer.deck1.delayBypass,
        // delayTime: state.decksReducer.deck1.delayTime,
        // delayMix: state.decksReducer.deck1.delayMix,
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      handleXFade: actions.handleXFade,
        // handlePlaybackSpeed: actions.handlePlaybackSpeed,
        // startStopSong: actions.startStopSong,
        // handleVolumeChange: actions.handleVolumeChange,
        // handleTrebleControl: actions.handleTrebleControl,
        // handleMidControl: actions.handleMidControl,
        // handleBassControl: actions.handleBassControl,
        // handleLpFilterCutoffChange: actions.handleLpFilterCutoffChange,
        // handleLpFilterResChange: actions.handleLpFilterResChange,
        // handleHpFilterCutoffChange: actions.handleHpFilterCutoffChange,
        // handleHpFilterResChange: actions.handleHpFilterResChange,
        // handleReverbMixChange: actions.handleReverbMixChange,
        // handleDelayChange: actions.handleDelayChange,
        // handleDistortionChange: actions.handleDistortionChange,
        // handleBitCrusherBypassChange: actions.handleBitCrusherBypassChange,
        // handleBitChange: actions.handleBitChange,
        // handleNormFreqChange: actions.handleNormFreqChange,
        // handleBufferSizeChange: actions.handleBufferSizeChange,
        // handleDelayTimeChange: actions.handleDelayTimeChange,
        // handleDelayMixChange: actions.handleDelayMixChange,
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);

