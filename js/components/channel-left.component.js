import React from 'react';
// import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Tuna from 'tunajs';

// import { startStopSong } from '../actions/index.action';
// import { handlePlaybackSpeed } from '../actions/index.action';
import * as actions from '../actions/index.action'

import Playlist from './playlist.container';
// import Deck from './deck.container';
import Turntable from './turntable.component';
import Mixer from './mixer.component';
import FxContainer from './fx-container.component';
import Header from './header.component';
import FxSection from './fx-section';

import Pot from './knob.component';



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


/*class Oscillator extends React.Component {
    constructor(props) {
        super(props)

        var audioContext = new AudioContext();

        var tuna = new Tuna(audioContext);

        // var myMediaElement = document.querySelector('audio');

        // this.source = audioContext.createMediaElementSource(myMediaElement);

        this.delay = new tuna.Delay({
        feedback: 0.5,    //0 to 1+
        delayTime: this.props.delayTime,    //1 to 10000 milliseconds
        wetLevel: this.props.delayMix,    //0 to 1+
        dryLevel: 0.5,       //0 to 1+
        cutoff: 2000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
        bypass: this.props.delayBypass
    });

        this.bitcrusher = new tuna.Bitcrusher({
          bits: this.props.bits,          //1 to 16
          normFreq: this.props.normFreq / 100,    //0 to 1
          bufferSize: this.props.bufferSize,  //256 to 16384
          bypass: this.props.bitCrusherBypass
      });

        this.convolver = new tuna.Convolver({
          highCut: 22050,                         //20 to 22050
          lowCut: 20,                             //20 to 22050
          dryLevel: 1,                            //0 to 1+
          wetLevel: this.props.reverb,                            //0 to 1+
          level: 1,                               //0 to 1+, adjusts total output of both wet and dry
          impulse: "./impulses/Large Long Echo Hall.wav",    //the path to your impulse response
          bypass: this.props.reverbBypass
      });


        this.oscillator = audioContext.createOscillator();
        this.oscillator.type = 'square'
        this.oscillator.frequency.value = this.props.oscFreq;

        this.gain = audioContext.createGain()
        this.analyser = audioContext.createAnalyser();
        this.distortion = audioContext.createWaveShaper();
        this.lowPassFilter = audioContext.createBiquadFilter();
        this.highPassFilter = audioContext.createBiquadFilter();

        this.lowPassFilter.type = "lowpass";
        this.lowPassFilter.frequency.value = this.props.lpCutoff;
        this.lowPassFilter.gain.value = 0;
        this.lowPassFilter.Q.value = 1;

        this.highPassFilter.type = "highpass";
        this.highPassFilter.frequency.value = this.props.hpCutoff;
        this.highPassFilter.gain.value = 0;
        this.highPassFilter.Q.value = 10;

        // this.source.connect(this.gain)
        this.oscillator.connect(this.gain)
        this.gain.connect(this.bitcrusher)
        this.bitcrusher.connect(this.highPassFilter)
        this.highPassFilter.connect(this.lowPassFilter)
        this.lowPassFilter.connect(this.delay)
        this.delay.connect(this.convolver)
        this.convolver.connect(this.analyser)
        this.analyser.connect(audioContext.destination)

        // this.setGain(0)
        // this.oscillator.start()
        // this.oscillator.stop()
    }
    render() {


        const handleStart = () => {
            this.oscillator.start()
        }
        const handleStop = () => {
            this.oscillator.stop()
        }

        const filterCutoffChange = () => {
          this.lowPassFilter.frequency.value = this.props.lpCutoff;
          // this.moog.cutoff = this.props.lpCutoff;
        }

        const filterResChange = () => {
          this.lowPassFilter.Q.value = this.props.lpRes;
          // this.moog.resonance = this.props.lpRes/25;
        }

        const normFreqChange = () => {
          this.bitcrusher.normFreq = this.props.normFreq;
        }
        const bitsChange = () => {
          this.bitcrusher.bits = this.props.bits;
        }

        const bufferChange = () => {
          this.bitcrusher.bufferSize = this.props.bufferSize;
        }

        const delayTimeChange = () => {
          this.delay.delayTime = this.props.delayTime;
        }

        const delayMixChange = () => {
          this.delay.wetLevel = this.props.delayMix/100;
        }


        return(
            <div>

            <h2>Osc Controls</h2>
            <div>
            <button onClick={handleStart} > Start </button>
            <button onClick={handleStop} > Stop </button>
            </div>
            <button onClick={() => {this.oscillator.type = 'sine'}} > Sine </button>
            <button onClick={() => {this.oscillator.type = 'sawtooth'}} > Saw </button>
            <button onClick={() => {this.oscillator.type = 'square'}} > Square </button>
            <button onClick={() => {this.oscillator.type = 'triangle'}} > Tri </button>

<div>

              <div>
                <h2> Filter Section </h2>
                <Pot title="Cutoff" defaultValue={this.props.lpCutoff} value={this.props.lpCutoff}
                onChange={(value) => {this.props.onFilterCutoffChange(value, this.props.deckNum), filterCutoffChange()}}
                //onChange={(value) => this.lowPassFilter.frequency.value = value}
                min={0} max={16000} angleOffset={180}
                angleArc={270}
                />
                <Pot title="Resonance" defaultValue={this.props.lpRes} value={this.props.lpRes}
                onChange={(value) => {this.props.onFilterResChange(value, this.props.deckNum), filterResChange()}}
                //onChange={(value) => this.lowPassFilter.frequency.value = value}
                min={0} max={100} angleOffset={180}
                angleArc={270}
                />
                </div>
                <div>
                  <h2>Distortion Section</h2>
                <Pot title="CrushFreq" defaultValue={this.props.normFreq} value={this.props.normFreq}
                onChange={(value) => {this.props.onNormFreqChange(value, this.props.deckNum), normFreqChange()}}
                //onChange={(value) => this.lowPassFilter.frequency.value = value}
                min={0} max={100} angleOffset={180}
                angleArc={270}
                />

                <Pot title="CrushBits" defaultValue={this.props.bits} value={this.props.bits}
                onChange={(value) => {this.props.onBitChange(value, this.props.deckNum), bitsChange()}}
                //onChange={(value) => this.lowPassFilter.frequency.value = value}
                min={0} max={16} angleOffset={180}
                angleArc={270}
                />

                <Pot title="CrushBuffer" defaultValue={this.props.bufferSize} value={this.props.bufferSize}
                onChange={(value) => {this.props.onBufferSizeChange(value, this.props.deckNum), bufferChange()}}
                //onChange={(value) => this.lowPassFilter.frequency.value = value}
                min={256} max={16384} angleOffset={180}
                angleArc={270}
                />
                </div>
                <div>
                  <h2>Delay Section</h2>
                  <Pot title="DelayTime" defaultValue={this.props.delayTime} value={this.props.delayTime}
                onChange={(value) => {this.props.onDelayTimeChange(value, this.props.deckNum), delayTimeChange()}}
                //onChange={(value) => this.lowPassFilter.frequency.value = value}
                min={0} max={1000} angleOffset={180}
                angleArc={270}
                />
                <Pot title="DelayMix" defaultValue={this.props.delayMix} value={this.props.delayMix}
                onChange={(value) => {this.props.onDelayMixChange(value, this.props.deckNum), delayMixChange()}}
                //onChange={(value) => this.lowPassFilter.frequency.value = value}
                min={0} max={100} angleOffset={180}
                angleArc={270}
                />
                </div>
            </div>
            </div>
        )
    }
}*/



class ChannelLeft extends React.Component {

  render() {
    // const filterChange = (value) => {
    //       this.lowPassFilter.frequency.value = this.props.lpCutoff;
    //     }

    // const handleLPCutoff = (value) => {handleFilterCutoffChange(value, this.props.deckNum), filterChange()}

    return (
      <div className="container-fluid col-lg-5 col-lg-offset-1 col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0" name={this.props.name}>

        {/*<div className="row">*/}
        <div
            className="container-fluid tt-mixer-container"
            style={styles.tt_mixer}>
          <Turntable
            deckNum="_DECK1"
            song={this.props.song}
            play={this.props.play}
            speed={this.props.speed}
            volume={this.props.volume}
            handlePlaybackSpeed={this.props.handlePlaybackSpeed}
            startStopSong={this.props.startStopSong}
            className="col-lg-4 col-md-4 col-sm-4 col-xs-4"/>
          <MuiThemeProvider>
            <Mixer deckNum="_DECK1"
            className="mixer col-lg-2 col-md-2 col-sm-2 col-xs-2"
            orientation={this.props.orientation}
            volume={this.props.volume}
            treble={this.props.treble}
            mid={this.props.mid}
            bass={this.props.bass}
            handleVolumeChange={this.props.handleVolumeChange}
            handleTrebleControl={this.props.handleTrebleControl}
            handleMidControl={this.props.handleMidControl}
            handleBassControl={this.props.handleBassControl} />
          </MuiThemeProvider>
        {/*</div>*/}
        </div>
         <div className="container-fluid">
         <MuiThemeProvider>
        <FxSection
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
                lpCutoff={this.props.lpFilterCutoff}
                lpRes={this.props.lpFilterRes}
                hpCutoff={this.props.hpFilterCutoff}
                hpRes={this.props.hpFilterRes}
                hpCutoff={this.props.hpFilterCutoff}
                context={this.audioContext}
                onPressNote={this.onPressNote}
                onReleaseNote={this.onReleaseNote}
                onLpFilterCutoffChange={this.props.handleLpFilterCutoffChange}
                onLpFilterResChange={this.props.handleLpFilterResChange}
                onHpFilterCutoffChange={this.props.handleHpFilterCutoffChange}
                onHpFilterResChange={this.props.handleHpFilterResChange}
                onBitCrusherBypassChange={this.props.handleBitCrusherBypassChange}
                onBitChange={this.props.handleBitChange}
                onNormFreqChange={this.props.handleNormFreqChange}
                onBufferSizeChange={this.props.handleBufferSizeChange}
                onDelayTimeChange={this.props.handleDelayTimeChange}
                onDelayMixChange={this.props.handleDelayMixChange}
                bits={this.props.bits}
                normFreq={this.props.normFreq}
                bufferSize={this.props.bufferSize} //4096
                bitCrusherBypass={this.props.bitCrusherBypass}
                //onCutoffChange={this.props.handleFilterChange}
                delayTime={this.props.delayTime}
                delayMix={this.props.delayMix}
                delayBypass={0}
                reverb={this.props.reverb}
                reverbBypass={1}
                value={this.props.filter}
                play={this.props.play}
                />
                 </MuiThemeProvider>
                 </div>
        {/*<div className="container-fluid">
          <MuiThemeProvider>
            <FxContainer deckNum="_DECK1"
            filter={this.props.filter}
            reverb={this.props.reverb}
            delay={this.props.delay}
            distortion={this.props.distortion}
            handleFilterChange={this.props.handleFilterChange}
            handleReverbChange={this.props.handleReverbChange}
            handleDelayChange={this.props.handleDelayChange}
            handleDistortionChange={this.props.handleDistortionChange}/>
          </MuiThemeProvider>
        </div>*/}
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
        lpFilterCutoff: state.decksReducer.deck1.lpFilterCutoff,
        lpFilterRes: state.decksReducer.deck1.lpFilterRes,
        hpFilterCutoff: state.decksReducer.deck1.hpFilterCutoff,
        hpFilterRes: state.decksReducer.deck1.hpFilterRes,
        reverb: state.decksReducer.deck1.reverb,
        delay: state.decksReducer.deck1.delay,
        distortion: state.decksReducer.deck1.distortion,
        bitCrusherBypass: state.decksReducer.deck1.bitCrusherBypass,
        bits: state.decksReducer.deck1.bits,
        normFreq: state.decksReducer.deck1.normFreq,
        bufferSize: state.decksReducer.deck1.bufferSize,
        delayTime: state.decksReducer.deck1.delayTime,
        delayMix: state.decksReducer.deck1.delayMix,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({handlePlaybackSpeed: actions.handlePlaybackSpeed, startStopSong: actions.startStopSong, handleVolumeChange: actions.handleVolumeChange, handleTrebleControl: actions.handleTrebleControl, handleMidControl: actions.handleMidControl, handleBassControl: actions.handleBassControl, handleLpFilterCutoffChange: actions.handleLpFilterCutoffChange, handleLpFilterResChange: actions.handleLpFilterResChange, handleHpFilterCutoffChange: actions.handleHpFilterCutoffChange, handleHpFilterResChange: actions.handleHpFilterResChange, handleReverbChange: actions.handleReverbChange, handleDelayChange: actions.handleDelayChange, handleDistortionChange: actions.handleDistortionChange, handleBitCrusherBypassChange: actions.handleBitCrusherBypassChange, handleBitChange: actions.handleBitChange, handleNormFreqChange: actions.handleNormFreqChange, handleBufferSizeChange: actions.handleBufferSizeChange, handleDelayTimeChange: actions.handleDelayTimeChange, handleDelayMixChange: actions.handleDelayMixChange}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelLeft);

