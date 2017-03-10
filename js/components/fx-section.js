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

import Pot from './knob.component';

const styles = {
    knob: {
        display: 'inline-block'
    }
}

export default class FxSection extends React.Component {
    constructor(props) {
        super(props)

        var audioContext = new AudioContext();

        var tuna = new Tuna(audioContext);

        var audio = new Audio();
        audio.src = './audio/RiptideRemix.wav';
        audio.controls = true;
        audio.autoplay = true;
        document.body.appendChild(audio);

        // var myMediaElement = document.querySelector('audio');

        this.source = audioContext.createMediaElementSource(audio);

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
        this.treble = audioContext.createBiquadFilter();
        this.mid = audioContext.createBiquadFilter();
        this.bass = audioContext.createBiquadFilter();
        this.lowPassFilter = audioContext.createBiquadFilter();
        this.highPassFilter = audioContext.createBiquadFilter();

        this.gain.value = 0

        // EQ

        this.treble.type = "highshelf";
        this.treble.frequency.value = 7000;
        this.treble.gain.value = this.props.treble;
        this.treble.Q.value = 0;

        this.mid.type = "peaking";
        this.mid.frequency.value = 1000;
        this.mid.gain.value = this.props.mid;
        this.mid.Q.value = 0;

        this.bass.type = "lowshelf";
        this.bass.frequency.value = 100;
        this.bass.gain.value = this.props.bass;
        this.bass.Q.value = 0;

        // Filter
        this.lowPassFilter.type = "lowpass";
        this.lowPassFilter.frequency.value = this.props.lpCutoff;
        this.lowPassFilter.gain.value = 0;
        this.lowPassFilter.Q.value = this.props.lpRes;

        this.highPassFilter.type = "highpass";
        this.highPassFilter.frequency.value = this.props.hpCutoff;
        this.highPassFilter.gain.value = 0;
        this.highPassFilter.Q.value = 10;

        // this.source.connect(this.gain)
        this.oscillator.connect(this.gain)
        this.gain.connect(this.bass)
        this.bass.connect(this.mid)
        this.mid.connect(this.treble)
        this.treble.connect(this.bitcrusher)
        this.bitcrusher.connect(this.highPassFilter)
        this.highPassFilter.connect(this.lowPassFilter)
        this.lowPassFilter.connect(this.delay)
        this.delay.connect(this.convolver)
        this.convolver.connect(this.analyser)
        this.analyser.connect(audioContext.destination)


    }
    render() {


        const handleStart = () => {
            this.oscillator.start()
        }
        const handleStop = () => {
            this.oscillator.stop()
        }

        const trebleChange = () => {
            this.treble.gain.value = this.props.treble;
        }

        const midChange = () => {
            this.mid.gain.value = this.props.mid;
        }

        const bassChange = () => {
            this.bass.gain.value = this.props.bass;
        }

        const lpFilterCutoffChange = () => {
          this.lowPassFilter.frequency.value = this.props.lpCutoff;
          // this.moog.cutoff = this.props.lpCutoff;
        }

        const lpFilterResChange = () => {
          this.lowPassFilter.Q.value = this.props.lpRes/10;
          // this.moog.resonance = this.props.lpRes/25;
        }

        const hpFilterCutoffChange = () => {
          this.highPassFilter.frequency.value = this.props.hpCutoff;
          // this.moog.cutoff = this.props.hpCutoff;
        }

        const hpFilterResChange = () => {
          this.highPassFilter.Q.value = this.props.hpRes/10;
          // this.moog.resonance = this.props.lpRes/25;
        }

        const bitBypassChange = () => {
          this.bitcrusher.bypass = this.props.bitCrusherBypass;
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
             <div name={this.props.name} className="fx-container container-fluid col-lg-6 col-md-6 col-sm-12 col-xs-12">
                 <div>
            <div style={styles.knob}>

            <h4>Osc Controls</h4>
            <div>
            <button onClick={handleStart} > Start </button>
            <button onClick={handleStop} > Stop </button>
            </div>
            <button onClick={() => {this.oscillator.type = 'sine'}} > Sine </button>
            <button onClick={() => {this.oscillator.type = 'sawtooth'}} > Saw </button>
            <button onClick={() => {this.oscillator.type = 'square'}} > Square </button>
            <button onClick={() => {this.oscillator.type = 'triangle'}} > Tri </button>

<div>
    <div className="eq-section">
        <Pot title="Treble" value={this.props.treble} onChange={(value) => {this.props.handleTrebleControl(value, this.props.deckNum), trebleChange()}} min={-12} max={12} angleOffset={180}
                angleArc={270}
                />
                <Pot title="Mid" value={this.props.mid} onChange={(value) => {this.props.handleMidControl(value, this.props.deckNum), midChange()}} min={-12} max={12} angleOffset={180}
                angleArc={270}
                />
                <Pot title="Bass" value={this.props.bass} onChange={(value) => {this.props.handleBassControl(value, this.props.deckNum), bassChange()}} min={-12} max={12} angleOffset={180}
                angleArc={270}
                />

    </div>

              <div className="filter-section">
                <h4> Filter Section </h4>
                <Pot
                title="LP Cutoff"
                defaultValue={this.props.lpCutoff}
                value={this.props.lpCutoff}
                onChange={(value) => {this.props.onLpFilterCutoffChange(value, this.props.deckNum), lpFilterCutoffChange()}}
                min={0}
                max={16000}
                angleOffset={180}
                angleArc={270}
                />
                <Pot
                title="LP Res"
                defaultValue={this.props.lpRes}
                value={this.props.lpRes}
                onChange={(value) => {this.props.onLpFilterResChange(value, this.props.deckNum), lpFilterResChange()}}
                min={0}
                max={100}
                angleOffset={180}
                angleArc={270}
                />
                <Pot title="HP Cutoff" defaultValue={this.props.hpCutoff} value={this.props.hpCutoff}
                onChange={(value) => {this.props.onHpFilterCutoffChange(value, this.props.deckNum), hpFilterCutoffChange()}}
                min={20} max={7000} angleOffset={180}
                angleArc={270}
                />
                <Pot
                title="HP Res"
                defaultValue={this.props.hpRes}
                value={this.props.hpRes}
                onChange={(value) => {this.props.onHpFilterResChange(value, this.props.deckNum), hpFilterResChange()}}
                min={0}
                max={100}
                angleOffset={180}
                angleArc={270}
                />
                </div>
                <div className="distortion-section" style={styles.knob}>
                  <h4>Distortion Section</h4>
                <button name='bitCrusherBypass' value={this.props.bitCrusherBypass} onTouchTap={(value) => {this.props.onBitCrusherBypassChange(value, this.props.deckNum), bitBypassChange()}}>Power</button>

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
                <div className="delay-section">
                  <h4>Delay Section</h4>
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
            </div>
            </div>
        )
    }
}