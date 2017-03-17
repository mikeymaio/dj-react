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
import Crossfader from './crossfader.component';
import Fader from './fader.component';


const styles = {
  //   root: {
  //   // display: 'flex',
  //   // flexDirection: 'row',
  //   // justifyContent: 'space-around',
  //   margin: '0 auto',
  //   marginBottom: 30,


  // },
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    //backgroundColor: 'black',
    height: 0,
    width: 220,
    paddingBottom: 15,
    marginTop: 0,
    marginLeft: 25,
    marginTop: 5
        // marginLeft: '0%',
    // width: '100%',
  },
  crossfader: {
    height: 5,
    width: 276,
    border: '1px solid #E3DEDB',
    backgroundColor: 'black',
    position: "absolute",
    bottom: 255,
    left: '31.25%',
    paddingTop: 0,
    paddingBottom: 30,
  },
};


class App extends Component {
  render() {
    // var audioContext1 = new AudioContext();
    // var audioContext2 = new AudioContext();
    return (
      <div className="container col-lg-11 col-lg-offset-1">
        {/*<Crossfader />*/}
        <ChannelLeft name="deck1" xFade={this.props.xFade} handleXFade={this.props.handleXFade} orientation="left"/>
        <ChannelRight name="deck2" xFade={this.props.xFade} handleXFade={this.props.handleXFade} orientation="right"/>
        <div className="container col-lg-8 col-lg-offset-1 col-md-2 col-md-offset-5 col-sm-2 col-sm-offset-4 col-xs-2 col-xs-offset-4">
<div style={styles.crossfader}>
<MuiThemeProvider>
  <Fader className="channelFader col-lg-1 col-md-1 col-sm-6" min={0} max={1} onChange={(event, value) => this.props.handleXFade(value, this.props.deckNum)} defaultValue={this.props.xFade} value={this.props.xFade} axis="x" style={styles.root}/>
  </MuiThemeProvider>
  </div>

          {/*<div style={styles.crossfader}>
                <MuiThemeProvider>
                <Crossfader id="crossfader" className="crossfader" defaultValue={this.props.xFade} value={this.props.xFade} onChange={(value) =>{this.props.handleXFade(value)}} style={styles.root}/>
                  </MuiThemeProvider>
            </div>*/}
          <MuiThemeProvider>
            <Playlist />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
        xFade: state.decksReducer.both.xFade,
        song: state.decksReducer.deck1.activeSong,
        play: state.decksReducer.deck1.play,
        speed: state.decksReducer.deck1.speed,
        volume: state.decksReducer.deck1.volume,
        treble: state.decksReducer.deck1.treble,
        mid: state.decksReducer.deck1.mid,
        bass: state.decksReducer.deck1.bass,
        //lpFilterBypass: state.decksReducer.deck1.lpFilterBypass,
        lpFilterCutoff: state.decksReducer.deck1.lpFilterCutoff,
        lpFilterRes: state.decksReducer.deck1.lpFilterRes,
        //hpFilterBypass: state.decksReducer.deck1.hpFilterBypass,
        hpFilterCutoff: state.decksReducer.deck1.hpFilterCutoff,
        hpFilterRes: state.decksReducer.deck1.hpFilterRes,
        //reverbBypass: state.decksReducer.deck1.reverbBypass,
        reverbMix: state.decksReducer.deck1.reverbMix,
        delay: state.decksReducer.deck1.delay,
        distortion: state.decksReducer.deck1.distortion,
        bitCrusherBypass: state.decksReducer.deck1.bitCrusherBypass,
        bits: state.decksReducer.deck1.bits,
        normFreq: state.decksReducer.deck1.normFreq,
        bufferSize: state.decksReducer.deck1.bufferSize,
        //delayBypass: state.decksReducer.deck1.delayBypass,
        delayTime: state.decksReducer.deck1.delayTime,
        delayMix: state.decksReducer.deck1.delayMix,
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

