import React from 'react';
// import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';

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
import Fader from './fader.component';

import Pot from './knob.component';

const styles = {
    knob: {
        display: 'inline-block'
    }
}


export default class FxSection extends React.Component {
    constructor(props) {
        super(props)
setTimeout(() => {
   // const update = () => {
        //if (this.props.activeSong !==null) {
        var audioContext = new AudioContext();
        // var audioContext = this.props.audioContext;

        var tuna = new Tuna(audioContext);

        // var audio = new Audio();
        // audio.src = '../../audio/RiptideRemix.wav';
        // audio.controls = true;
        // audio.autoplay = true;
        // document.body.appendChild(audio);
        var deck = document.querySelector(':scope .' + this.props.deckNum + ' audio');

        // var deck2 = document.querySelector(':scope .' + this.props.deckNum + ' audio');

        // var myMediaElement = div.querySelectorAll('audio');
//debugger;
        this.source = audioContext.createMediaElementSource(deck);

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
            bypass: this.props.bitCrusherBypass || true
        });

        this.reverb = new tuna.Convolver({
            highCut: 22050,                         //20 to 22050
            lowCut: 50,                             //20 to 22050
            dryLevel: 1,                            //0 to 1+
            wetLevel: 0, //this.props.reverbMix,                            //0 to 1+
            level: 1,                               //0 to 1+, adjusts total output of both wet and dry
            impulse: "/assets/impulses/LargeLongEchoHall.wav",    //the path to your impulse response
            bypass: false //this.props.reverbBypass
        });

        // this.tremolo = new tuna.Tremolo({
        //     intensity: 1,    //0 to 1
        //     rate: 4,         //0.001 to 8
        //     stereoPhase: 0,    //0 to 180
        //     bypass: false
        // });

        // this.phaser = new tuna.Phaser({
        //     rate: 0.2,                     //0.01 to 8 is a decent range, but higher values are possible
        //     depth: 0.8,                    //0 to 1
        //     feedback: 0.8,                 //0 to 1+
        //     stereoPhase: 90,               //0 to 180
        //     baseModulationFrequency: 500,  //500 to 1500
        //     bypass: 0
        // });

        this.compressor = new tuna.Compressor({
            threshold: -0.3,    //-100 to 0
            makeupGain: 0.2,     //0 and up (in decibels)
            attack: 1,         //0 to 1000
            release: 0,        //0 to 3000
            ratio: 20,          //1 to 20
            knee: 5,           //0 to 40
            automakeup: true,  //true/false
            bypass: 0
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

        // Analyser

        // this.analyser.fftSize = 2048;
        // var bufferLength = this.analyser.fftSize;
        // var dataArray = new Uint8Array(bufferLength);
        // this.analyser.getByteTimeDomainData(dataArray);


        // Connect Nodes

        this.source.connect(this.gain)
        // this.oscillator.connect(this.gain)
        this.gain.connect(this.bass)
        this.bass.connect(this.mid)
        this.mid.connect(this.treble)
        this.treble.connect(this.bitcrusher)
        this.bitcrusher.connect(this.highPassFilter)
        this.highPassFilter.connect(this.lowPassFilter)
        this.lowPassFilter.connect(this.delay)
        // this.lowPassFilter.connect(this.phaser)
        // this.phaser.connect(this.delay)
        this.delay.connect(this.reverb)
        this.reverb.connect(this.compressor)
        // this.reverb.connect(this.tremolo)
        // this.tremolo.connect(this.analyser)
        this.compressor.connect(this.analyser)
        this.analyser.connect(audioContext.destination)

}, 1000);
        //}}
    }
    render() {

        let bitCrusherBtnClassNames = classnames('power-button', {'active': !this.props.bitCrusherBypass})


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
          this.bitcrusher.bypass = !this.bitcrusher.bypass;
        //   this.bitcrusher.bypass = this.props.bitCrusherBypass;
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

        const reverbMixChange = () => {
          this.reverb.wetLevel = this.props.reverbMix/100;
        }

        const delayTimeChange = () => {
          this.delay.delayTime = this.props.delayTime;
        }

        const delayMixChange = () => {
          this.delay.wetLevel = this.props.delayMix/100;
        }


        return(
             <div name={this.props.name} className="fx-container container-fluid col-lg-12 col-md-12 col-sm-12 col-xs-12">
                 {/*<div>*/}
            <div style={styles.knob}>
{/*
            <h4>Osc Controls</h4>
            <div>
            <button onClick={handleStart} > Start </button>
            <button onClick={handleStop} > Stop </button>
            </div>
            <button onClick={() => {this.oscillator.type = 'sine'}} > Sine </button>
            <button onClick={() => {this.oscillator.type = 'sawtooth'}} > Saw </button>
            <button onClick={() => {this.oscillator.type = 'square'}} > Square </button>
            <button onClick={() => {this.oscillator.type = 'triangle'}} > Tri </button>*/}

        {/*<div>*/}
    <div className="eq-section">
        <Pot
            title="High"
            value={this.props.treble}
            onChange={(value) => {this.props.handleTrebleControl(value, this.props.deckNum), trebleChange()}}
            min={-9}
            max={9}
            angleOffset={180}
            angleArc={270}
        />
         <Pot
            title="Mid"
            value={this.props.mid}
            onChange={(value) => {this.props.handleMidControl(value, this.props.deckNum), midChange()}}
            min={-9}
            max={9}
            angleOffset={180}
            angleArc={270}
        />
        <Pot
            title="Low"
            value={this.props.bass}
            onChange={(value) => {this.props.handleBassControl(value, this.props.deckNum), bassChange()}}
            min={-9}
            max={9}
            angleOffset={180}
            angleArc={270}
        />

    </div>
        <div className="row">
              {/*<div
              className="filter-section col-lg-4 col-md-4 col-sm-4 col-xs-4"
              style={{"display": "inline-block"}}>*/}
                <h4> Filters</h4>
                <div className="lpFilter col-lg-2 col-md-2 col-sm-2 col-xs-2" style={{"display": "inline-block"}}>
                   <h4>LP</h4>
                <Pot
                title="Cutoff"
                defaultValue={this.props.lpCutoff}
                value={this.props.lpCutoff}
                onChange={(value) => {this.props.onLpFilterCutoffChange(value, this.props.deckNum), lpFilterCutoffChange()}}
                min={0}
                max={16000}
                angleOffset={180}
                angleArc={270}
                />
                <p>LP</p>
                {/*<Pot
                title="LP Res"
                defaultValue={this.props.lpRes}
                value={this.props.lpRes}
                onChange={(value) => {this.props.onLpFilterResChange(value, this.props.deckNum), lpFilterResChange()}}
                min={0}
                max={100}
                angleOffset={180}
                angleArc={270}
                />*/}
                </div>
                <div className="hpFilter col-lg-2 col-md-2 col-sm-2 col-xs-2" style={{"display": "inline-block"}}>
                    <h4>HP</h4>
                <Pot title="Cutoff" defaultValue={this.props.hpCutoff} value={this.props.hpCutoff}
                onChange={(value) => {this.props.onHpFilterCutoffChange(value, this.props.deckNum), hpFilterCutoffChange()}}
                min={20} max={7000} angleOffset={180}
                angleArc={270}
                />
                <p>HP</p>
                {/*<Pot
                title="HP Res"
                defaultValue={this.props.hpRes}
                value={this.props.hpRes}
                onChange={(value) => {this.props.onHpFilterResChange(value, this.props.deckNum), hpFilterResChange()}}
                min={0}
                max={100}
                angleOffset={180}
                angleArc={270}
                />*/}
                {/*</div>*/}
                </div>
                <div className="distortion-section col-lg-2 col-md-2 col-sm-2 col-xs-2" style={{"display": "inline-block"}}>
                  <h4>Crush</h4>

                {/*<Pot title="CrushFreq" defaultValue={this.props.normFreq} value={this.props.normFreq}
                onChange={(value) => {this.props.onNormFreqChange(value, this.props.deckNum), normFreqChange()}}
                //onChange={(value) => this.lowPassFilter.frequency.value = value}
                min={0} max={100} angleOffset={180}
                angleArc={270}
                />*/}

                <Pot title="Crush" defaultValue={this.props.bits} value={this.props.bits}
                onChange={(value) => {this.props.onBitChange(value, this.props.deckNum), bitsChange()}}
                //onChange={(value) => this.lowPassFilter.frequency.value = value}
                min={0} max={16} angleOffset={180}
                angleArc={270}
                />

                {/*<Pot title="CrushBuffer" defaultValue={this.props.bufferSize} value={this.props.bufferSize}
                onChange={(value) => {this.props.onBufferSizeChange(value, this.props.deckNum), bufferChange()}}
                //onChange={(value) => this.lowPassFilter.frequency.value = value}
                min={256} max={16384} angleOffset={180}
                angleArc={270}
                />*/}

                <button className={bitCrusherBtnClassNames} name='bitCrusherBypass' value={this.props.bitCrusherBypass} onClick={(value) => {this.props.onBitCrusherBypassChange(value, this.props.deckNum), bitBypassChange()}}>Power</button>
                </div>

                <div className="reverb-section col-lg-3 col-md-3 col-sm-3 col-xs-3" style={{"display": "inline-block"}}>
                  <h4>Reverb</h4>
                  <Pot title="Mix" defaultValue={this.props.reverbMix} value={this.props.reverbMix}
                onChange={(value) => {this.props.onReverbMixChange(value, this.props.deckNum), reverbMixChange()}}
                //onChange={(value) => this.lowPassFilter.frequency.value = value}
                min={0} max={100} angleOffset={180}
                angleArc={270}
                />
                </div>

                <div className="delay-section col-lg-2 col-md-2 col-sm-2 col-xs-2" style={{"display": "inline-block"}}>
                  <h4>Delay</h4>
                  <Pot title="Time" defaultValue={this.props.delayTime} value={this.props.delayTime}
                onChange={(value) => {this.props.onDelayTimeChange(value, this.props.deckNum), delayTimeChange()}}
                //onChange={(value) => this.lowPassFilter.frequency.value = value}
                min={0} max={1000} angleOffset={180}
                angleArc={270}
                />
                <Pot title="Mix" defaultValue={this.props.delayMix} value={this.props.delayMix}
                onChange={(value) => {this.props.onDelayMixChange(value, this.props.deckNum), delayMixChange()}}
                //onChange={(value) => this.lowPassFilter.frequency.value = value}
                min={0} max={100} angleOffset={180}
                angleArc={270}
                />
                </div>
            </div>
            </div>
            </div>
            //</div>
        )
    }
}