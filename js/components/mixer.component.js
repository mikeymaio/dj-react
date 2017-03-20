import React from 'react';
// import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';
import classnames from 'classnames';

import Fader from './fader.component';
import Pot from './knob.component';
import Meter from './meter.component';
import Turntable from './turntable.component';
// import { handleVolumeChange } from '../actions/index.action';
// import { handleTrebleControl } from '../actions/index.action';
// import { handleMidControl } from '../actions/index.action';
// import { handleBassControl } from '../actions/index.action';

import injectTapEventPlugin from 'react-tap-event-plugin';



const styles = {
    faderSection: {
        backgroundColor: 'black',
        marginLeft: 0,
        width: '100%',
    },
    root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    height: 100,
    paddingBottom: 0,
    paddingTop: 10,
    marginTop: 0,
    marginBottom: 0,
        margin: 'auto',
    width: '50%',
  },
  label: {
    display: 'flex',
    justifyContent: 'space-around',
    color: '#009ab2',
    marginBottom: 0,
    backgroundColor: 'black',
    width: 55,
    // width: '100%',
    // width: '470%',
    marginLeft: -7,
    // marginLeft: '0%',
    marginTop: 3,
    marginBottom: 5,
    // padding: 5,
  },
  volumeFader: {
    // marginLeft: 1,
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'black',
    border: '5px solid silver',
    paddingBottom: 50,
    width: '60%',
    height: 150,
    left:'5%'
    // width: '40%'

  },
    mixer: {
    display: 'inline-block',
    position: 'relative',
    height: 390,
    width: '30%',
    background: 'black',
    marginTop: 20,

    backgroundImage: 'linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    backgroundImage:' -o-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    backgroundImage: '-moz-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    backgroundImage: '-webkit-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    backgroundImage: '-ms-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    webKitBorderRadius: 1,
    MozBorderRadius: 1,
    borderRadius: 1,
    webKitBoxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',
    MozBoxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',
    boxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',
    },
  eq: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-around',
    marginTop: 5,
    marginLeft: 0,
    height: 180
  },
//   meter: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-around',
//     //height: 300,
//     transform: 'rotate(-90deg)',
//   },
meterDiv: {
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'space-around',
    height: 300,
},
  meter: {
      display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'space-around',
      transform: 'rotate(-90deg)',
      marginTop: 85,
      marginLeft: 0,
      height: 30,
  }
};

// const test = new Audio();

// test.src = '/assets/test_playlist/James_Brown_vs_Led Zeppelin-Whole_Lotta_Sex_Machine.mp3';
// test.autoplay = false;
// test.crossOrigin = 'anonymous';
// test.controls = true;

class Mixer extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        // }

        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Gain for Volume Slider
        this.gain = this.audioContext.createGain();
        this.gain.defaultValue = 0.8;
        this.gain.minValue = 0;
        this.gain.maxValue = 1.5;



    // EQ
        // const treble = this.audioContext.createBiquadFilter();
        // treble.type = 'highshelf';
        // treble.frequency.value = 7000;
        // treble.gain.value = 1;

        // const mid = this.audioContext.createBiquadFilter();
        // mid.type = 'peaking';
        // mid.frequency.value = 1000;
        // mid.gain.value = 1;

        // const bass = this.audioContext.createBiquadFilter();
        // bass.type = 'lowshelf';
        // bass.frequency.value = 100;
        // bass.gain.value = 1;
    }



    render() {

        let eqClassNames = classnames("eq col-lg-6 col-md-6 col-sm-6", this.props.orientation)

        const TEST = {
            audioContext: 'player'
        }
        return (
        <div name={this.props.name} className={this.props.className} style={styles.mixer}>
            <div className="row">
            <div className={eqClassNames} style={styles.eq}>
                {/*<Knob name="High"/>
                <Knob name="Mid"/>
                <Knob name="Low"/>*/}
                <Pot title="Treble" value={this.props.treble} onChange={(value) => this.props.handleTrebleControl(value, this.props.deckNum)} min={-12} max={12} angleOffset={180}
                angleArc={270}
                />
                <Pot title="Mid" value={this.props.mid} onChange={(value) => this.props.handleMidControl(value, this.props.deckNum)} min={-12} max={12} angleOffset={180}
                angleArc={270}
                />
                <Pot title="Bass" value={this.props.bass} onChange={(value) => this.props.handleBassControl(value, this.props.deckNum)} min={-12} max={12} angleOffset={180}
                angleArc={270}
                />
            </div>
            <div className="meter col-lg-6 col-md-6 col-sm-6" style={styles.meterDiv}>
                <Meter title="Meter" audioContext={this.props.audioContext} style={styles.meter} command='start' src={null} width={200} height={1} />
            </div>
            </div>
            <div className="volumeFader col-lg-1 col-lg-offset-2 col-md-1 col-sm-6" style={styles.volumeFader}>
                <label htmlFor="channelFader col-lg-1 col-md-1 col-sm-6" style={styles.label} className="volumeLabel">Volume</label>
                <div style={styles.faderSection}>
                <Fader className="channelFader col-lg-1 col-md-1 col-sm-6" axis="y" min={0} max={1} onChange={(event, value) => this.props.handleVolumeChange(value, this.props.deckNum)} defaultValue={this.props.volume} value={this.props.volume} style={styles.root}/>
                </div>
            </div>
            {/*<Meter />*/}
      </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         volume: state.decksReducer.deck1.volume,
//         treble: state.decksReducer.deck1.treble,
//         mid: state.decksReducer.deck1.mid,
//         bass: state.decksReducer.deck1.bass,
//     };
// }


// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({handleVolumeChange: handleVolumeChange, handleTrebleControl: handleTrebleControl, handleMidControl: handleMidControl, handleBassControl: handleBassControl}, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Mixer);

export default Mixer;

// export default Mixer;

