import React from 'react';
// import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';

import Fader from './fader.component';
import Pot from './knob.component';
import Meter from './meter.component';
import Deck from './deck.container';

// import { handleVolumeChange } from '../actions/index.action';
// import { handleTrebleControl } from '../actions/index.action';
// import { handleMidControl } from '../actions/index.action';
// import { handleBassControl } from '../actions/index.action';

import injectTapEventPlugin from 'react-tap-event-plugin';



const style = {
    root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    height: 130,
    paddingBottom: 15,
    marginTop: 0,
    marginLeft: -10,
        // marginLeft: '0%',
    width: 55,
    // width: '100%',
  },
    mixer: {
    display: 'inline-block',
    position: 'relative',
    height: 414,
    width: '30%',
    background: 'black',
    marginTop: 20
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
    marginLeft: -10,
    // marginLeft: '0%',
    marginTop: 1,
    // padding: 5,
  },
  volumeFader: {
    // marginLeft: 1,
    position: 'absolute',
    bottom: 10,
    backgroundColor: 'silver',
    paddingBottom: 1,
    width: 66,
    // width: '40%'

  },
  eq: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-around',
    marginTop: 10,
    marginLeft: -5,
    height: 200
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
      marginTop: 95,
      marginLeft: 10,
      height: 30,
  }
};

class Mixer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }

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

        const TEST = {
            audioContext: 'player'
        }
        return (
        <div name={this.props.name} className={this.props.className} style={style.mixer}>
            <div className="row">
            <div className="eq col-lg-6 col-md-6 col-sm-6" style={style.eq}>
                {/*<Knob name="High"/>
                <Knob name="Mid"/>
                <Knob name="Low"/>*/}
                <Pot title="Treble" value={this.props.treble + 50} onChange={this.props.handleTrebleControl(this.props.deckNum)} />
                <Pot title="Mid" value={this.props.mid + 50} onChange={this.props.handleMidControl(this.props.deckNum)} />
                <Pot title="Bass" value={this.props.bass + 50} onChange={this.props.handleBassControl(this.props.deckNum)} />
            </div>
            <div className="meter col-lg-6 col-md-6 col-sm-6" style={style.meterDiv}>
                <Meter title="Meter" audioContext={TEST} style={style.meter} command='start' src={<Deck />} width={200} height={1} />
            </div>
            </div>
            <div className="volumeFader col-lg-1 col-lg-offset-2 col-md-1 col-sm-6" style={style.volumeFader}>
                <label htmlFor="channelFader col-lg-1 col-md-1 col-sm-6" style={style.label} className="volumeLabel">Volume</label>
                <Fader className="channelFader col-lg-1 col-md-1 col-sm-6" onChange={(event, value) => this.props.handleVolumeChange(value, this.props.deckNum)} defaultValue={this.props.volume} value={this.props.volume} style={style.root}/>
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

