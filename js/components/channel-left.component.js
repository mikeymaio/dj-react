import React from 'react';
// import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Tuna from 'tunajs';

import classnames from 'classnames';
// import { startStopSong } from '../actions/index.action';
// import { handlePlaybackSpeed } from '../actions/index.action';
import * as actions from '../actions/index.action'

import Playlist from './playlist.container';

// import Turntable from './turntable.component';
import Turntable from './turntable2.component';
import Mixer from './mixer.component';

import Header from './header.component';
import FxSection from './fx-section.component';
import Meter from './meter.component';

import Visualizer from './visualizer.component';


import Pot from './knob.component';




// import Turntable2 from './turntable2';

const styles = {
  tt_mixer: {
    height: 425,
    // width: 500
  },
  container: {
    margin: 0,
    padding: 0
  },
}

class ChannelLeft extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        // inputValue: 1

        played: 0,
        loaded: 0,
        duration: 0,
        source: null
    }

    }
  // this.onSeekMouseDown = e => {
  //     // this.setState({ seeking: true })
  //     this.props.handleSeek(this.props.deckNum)
  //   }
  //   this.onSeekChange = e => {
  //     this.props.handleProgressChange(e.target.value, this.props.deckNum)
  //   }
  //   this.onSeekMouseUp = e => {
  //     // this.handleSeek({ seeking: false })
  //     this.props.handleSeek(this.props.deckNum)
  //     // this.player.seekTo(parseFloat(e.target.value))
  //   }


  // this.onProgress = state => {
  //     // We only want to update time slider if we are not currently seeking
  //     if (!this.props.seeking) {
  //       this.props.handleProgressChange(e.target.value, this.props.deckNum)
  //     }
  //   }

//let source;
componentDidMount() {
this.getData = () => {
  source = this.props.createBufferSource();
  var request = new XMLHttpRequest();

  request.open('GET', this.props.activeSong, true);

  request.responseType = 'arraybuffer';


  request.onload = () => {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, (buffer) => {
      console.log(buffer);
        this.setState({
          source: buffer
        })
        // source.connect(audioCtx.destination);
        // source.loop = true;
      },

      (e) => { console.log("Error with decoding audio data" + e.err); });

  }

  request.send();
}


}

  render() {

console.log(this.state.source);

const turntableClass = classnames("turntable-container col-lg-4 col-md-4 col-sm-4 col-xs-4", this.props.orientation)
    return (
      <div id="_DECK1" className="container-fluid col-lg-6 col-md-6 col-sm-12 col-xs-12" name={this.props.name} style={{height: '50%'}} >
        {/*<WaveformDisplay buffer={this.state.source} width={500} zoom={1} color="cadetblue"/>*/}
        {/*<div className="row">*/}
        <div
            className="container-fluid tt-mixer-container"
            style={styles.tt_mixer}>
          <Turntable
            audioContext={this.props.audioContext}
            selectSong={this.props.selectSong}
            style={{height: 0, marginBottom: 0, paddingBottom: 0}}
            deckNum="_DECK1"
            xFade={this.props.xFade}
            progress={this.props.progress}
            seeking={this.props.seeking}
            song={this.props.song}
            play={this.props.play}
            speed={this.props.speed}
            volume={this.props.volume}
            handleSeek={this.props.handleSeek}
            handleProgressChange={this.props.handleProgressChange}
            handlePlaybackSpeed={this.props.handlePlaybackSpeed}
            handleXfade={this.props.handleXfade}
            startStopSong={this.props.startStopSong}
            className={turntableClass}/>
          <MuiThemeProvider>
            <Mixer deckNum="_DECK1"
            className="mixer col-lg-2 col-md-2 col-sm-2 col-xs-2"
            audioContext={this.props.audioContext}
            orientation={this.props.orientation}
            volume={this.props.volume}
            treble={this.props.treble}
            mid={this.props.mid}
            bass={this.props.bass}
            xFade={this.props.xFade}
            handleVolumeChange={this.props.handleVolumeChange}
            handleTrebleControl={this.props.handleTrebleControl}
            handleMidControl={this.props.handleMidControl}
            handleBassControl={this.props.handleBassControl}
            handleXfade={this.props.handleXfade}
            />
          </MuiThemeProvider>
        {/*</div>*/}
        </div>
         <div className="container-fluid col-lg-12 col-md-12 col-sm-12 col-xs-12">
         <MuiThemeProvider>
        <FxSection
                handleXFade={this.props.handleXFade}
                xFade={this.props.xFade}
                audioContext={this.props.audioContext}
                song={this.props.song}
                deckNum="_DECK1"
                //type='square'
                oscFreq={50}
                treble={this.props.treble}
                mid={this.props.mid}
                bass={this.props.bass}
                handleVolumeChange={this.props.handleVolumeChange}
                handleTrebleControl={this.props.handleTrebleControl}
                handleMidControl={this.props.handleMidControl}
                handleBassControl={this.props.handleBassControl}
                lpFilterBypass={this.props.lpFilterBypass}
                lpCutoff={this.props.lpFilterCutoff}
                lpRes={this.props.lpFilterRes}
                hpFilterBypass={this.props.hpFilterBypass}
                hpCutoff={this.props.hpFilterCutoff}
                hpRes={this.props.hpFilterRes}
                hpCutoff={this.props.hpFilterCutoff}
                context={this.audioContext}
                onPressNote={this.onPressNote}
                onReleaseNote={this.onReleaseNote}
                onLpFilterBypassChange={this.props.handleLpFilterBypassChange}
                onLpFilterCutoffChange={this.props.handleLpFilterCutoffChange}
                onLpFilterResChange={this.props.handleLpFilterResChange}
                onHpFilterBypassChange={this.props.handleHpFilterBypassChange}
                onHpFilterCutoffChange={this.props.handleHpFilterCutoffChange}
                onHpFilterResChange={this.props.handleHpFilterResChange}
                onBitCrusherBypassChange={this.props.handleBitCrusherBypassChange}
                onBitChange={this.props.handleBitChange}
                onNormFreqChange={this.props.handleNormFreqChange}
                onBufferSizeChange={this.props.handleBufferSizeChange}
                onReverbBypassChange={this.props.handleReverbBypassChange}
                onReverbMixChange={this.props.handleReverbMixChange}
                onDelayBypassChange={this.props.handleDelayBypassChange}
                onDelayTimeChange={this.props.handleDelayTimeChange}
                onDelayMixChange={this.props.handleDelayMixChange}
                bits={this.props.bits}
                normFreq={this.props.normFreq}
                bufferSize={this.props.bufferSize} //4096
                bitCrusherBypass={this.props.bitCrusherBypass}
                //onCutoffChange={this.props.handleFilterChange}
                reverbMix={this.props.reverbMix}
                delayTime={this.props.delayTime}
                delayMix={this.props.delayMix}
                delayBypass={false}
                reverb={this.props.reverb}
                reverbBypass={false}
                value={this.props.filter}
                play={this.props.play}
                />
                 </MuiThemeProvider>
                 </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
        //xFade: state.decksReducer.xFade,
        song: state.decksReducer.deck1.activeSong,
        play: state.decksReducer.deck1.play,
        speed: state.decksReducer.deck1.speed,
        volume: state.decksReducer.deck1.volume,
        progress: state.decksReducer.deck1.progress,
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
        handlePlaybackSpeed: actions.handlePlaybackSpeed,
        startStopSong: actions.startStopSong,
        selectSong: actions.selectSong,
        handleVolumeChange: actions.handleVolumeChange,
        handleTrebleControl: actions.handleTrebleControl,
        handleMidControl: actions.handleMidControl,
        handleBassControl: actions.handleBassControl,
        handleLpFilterCutoffChange: actions.handleLpFilterCutoffChange,
        handleLpFilterResChange: actions.handleLpFilterResChange,
        handleHpFilterCutoffChange: actions.handleHpFilterCutoffChange,
        handleHpFilterResChange: actions.handleHpFilterResChange,
        handleReverbMixChange: actions.handleReverbMixChange,
        handleDelayChange: actions.handleDelayChange,
        handleDistortionChange: actions.handleDistortionChange,
        handleBitCrusherBypassChange: actions.handleBitCrusherBypassChange,
        handleBitChange: actions.handleBitChange,
        handleNormFreqChange: actions.handleNormFreqChange,
        handleBufferSizeChange: actions.handleBufferSizeChange,
        handleDelayTimeChange: actions.handleDelayTimeChange,
        handleDelayMixChange: actions.handleDelayMixChange,
        handleProgressChange: actions.handleProgressChange,
        handleSeek: actions.handleSeek,
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelLeft);

