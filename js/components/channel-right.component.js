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

class ChannelRight extends React.Component {
  render() {
    return (
      <div className="container-fluid col-lg-5 col-md-6 col-sm-10 col-xs-12" name={this.props.name}>
        {/*<div className="row">*/}
        <div className="container-fluid tt-mixer-container" style={styles.tt_mixer}>
            <MuiThemeProvider>
            <Mixer deckNum="_DECK2" className="mixer col-lg-2 col-md-2 col-sm-2 col-xs-2" volume={this.props.volume}
            treble={this.props.treble} mid={this.props.mid} bass={this.props.bass} orientation={this.props.orientation}
            handleVolumeChange={this.props.handleVolumeChange} handleTrebleControl={this.props.handleTrebleControl}
            handleMidControl={this.props.handleMidControl} handleBassControl={this.props.handleBassControl}
            handleFilterChange={this.props.handleFilterChange} handleReverbChange={this.props.handleReverbChange}
            handleDelayChange={this.props.handleDelayChange} handleDistortionChange={this.props.handleDistortionChange}
            />
          </MuiThemeProvider>
          <Turntable deckNum="_DECK2" song={this.props.song} play={this.props.play} speed={this.props.speed} volume={this.props.volume} handlePlaybackSpeed={this.props.handlePlaybackSpeed} startStopSong={this.props.startStopSong} className="col-lg-4 col-md-4 col-sm-4 col-xs-4"/>
        {/*</div>*/}
        </div>
        <div className="container-fluid">
          <MuiThemeProvider>
            <FxContainer deckNum="_DECK2" filter={this.props.filter} reverb={this.props.reverb} delay={this.props.delay} distortion={this.props.distortion} handleFilterChange={this.props.handleFilterChange} handleReverbChange={this.props.handleReverbChange} handleDelayChange={this.props.handleDelayChange} handleDistortionChange={this.props.handleDistortionChange}/>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        song: state.decksReducer.deck2.activeSong,
        play: state.decksReducer.deck2.play,
        speed: state.decksReducer.deck2.speed,
        volume: state.decksReducer.deck2.volume,
        treble: state.decksReducer.deck2.treble,
        mid: state.decksReducer.deck2.mid,
        bass: state.decksReducer.deck2.bass,
        filter: state.decksReducer.deck2.filter,
        reverb: state.decksReducer.deck2.reverb,
        delay: state.decksReducer.deck2.delay,
        distortion: state.decksReducer.deck2.distortion,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({handlePlaybackSpeed: actions.handlePlaybackSpeed, startStopSong: actions.startStopSong, handleVolumeChange: actions.handleVolumeChange, handleTrebleControl: actions.handleTrebleControl, handleMidControl: actions.handleMidControl, handleBassControl: actions.handleBassControl, handleFilterChange: actions.handleFilterChange, handleReverbChange: actions.handleReverbChange, handleDelayChange: actions.handleDelayChange, handleDistortionChange: actions.handleDistortionChange}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelRight);
