import React from 'react';
// import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

// import { startStopSong } from '../actions/index.action';
// import { handlePlaybackSpeed } from '../actions/index.action';
import * as actions from '../actions/index.action'

import Playlist from './playlist.container';
// import Deck from './deck.container';
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
  },
}

class ChannelLeft extends React.Component {
  render() {
    return (
      <div className="container-fluid col-lg-5 col-lg-offset-1 col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0" name={this.props.name}>
        {/*<div className="row">*/}
        <div className="container-fluid tt-mixer-container" style={styles.tt_mixer}>
          <Turntable deckNum="_DECK1" song={this.props.song} play={this.props.play} speed={this.props.speed} volume={this.props.volume} handlePlaybackSpeed={this.props.handlePlaybackSpeed} startStopSong={this.props.startStopSong} className="col-lg-4 col-md-4 col-sm-4 col-xs-4"/>
            <MuiThemeProvider>
            <Mixer deckNum="_DECK1" className="mixer col-lg-2 col-md-2 col-sm-2 col-xs-2" volume={this.props.volume} treble={this.props.treble} mid={this.props.mid} bass={this.props.bass}
            handleVolumeChange={this.props.handleVolumeChange} handleTrebleControl={this.props.handleTrebleControl} handleMidControl={this.props.handleMidControl} handleBassControl={this.props.handleBassControl} />
          </MuiThemeProvider>
        {/*</div>*/}
        </div>
        <div className="container-fluid">
          <MuiThemeProvider>
            <FxContainer deckNum="_DECK1" filter={this.props.filter} reverb={this.props.reverb} delay={this.props.delay} distortion={this.props.distortion} handleFilterChange={this.props.handleFilterChange} handleReverbChange={this.props.handleReverbChange} handleDelayChange={this.props.handleDelayChange} handleDistortionChange={this.props.handleDistortionChange}/>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        song: state.decksReducer.deck1.activeSong,
        play: state.decksReducer.deck1.play,
        speed: state.decksReducer.deck1.speed,
        volume: state.decksReducer.deck1.volume,
        treble: state.decksReducer.deck1.treble,
        mid: state.decksReducer.deck1.mid,
        bass: state.decksReducer.deck1.bass,
        filter: state.decksReducer.deck1.filter,
        reverb: state.decksReducer.deck1.reverb,
        delay: state.decksReducer.deck1.delay,
        distortion: state.decksReducer.deck1.distortion,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({handlePlaybackSpeed: actions.handlePlaybackSpeed, startStopSong: actions.startStopSong, handleVolumeChange: actions.handleVolumeChange, handleTrebleControl: actions.handleTrebleControl, handleMidControl: actions.handleMidControl, handleBassControl: actions.handleBassControl, handleFilterChange: actions.handleFilterChange, handleReverbChange: actions.handleReverbChange, handleDelayChange: actions.handleDelayChange, handleDistortionChange: actions.handleDistortionChange}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelLeft);

