import React from 'react';

import classnames from 'classnames';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index.action'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import ReactPlayer from 'react-player';

import Fader from './fader.component';

import Dropzone from 'react-dropzone';
import Snackbar from 'material-ui/Snackbar';
import WaveDisplay from './waveformDisplay.component';



const styleDeck = {
  height: 266,
  width: 266,
  //margin: 20,
  marginTop: 15,
  // float: 'left',
  backgroundColor: '#1f1f1f',
  textAlign: 'center',
  display: 'inline-block',
//   backgroundImage: 'linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
//     backgroundImage:' -o-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
//     backgroundImage: '-moz-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
//     backgroundImage: '-webkit-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
//     backgroundImage: '-ms-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    webKitBorderRadius: 265,
    MozBorderRadius: 265,
    borderRadius: 265,
    backgroundColor: '#1a1a1a',
    backgroundColor: '#0a7da7',
    webKitBoxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',
    MozBoxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',
    boxShadow: 'iinset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',
};

const styleImg = {
  height: '100%',
  width: '100%',
//   textAlign: 'center',
  borderRadius: '100%',

};

const stylePlatter1 = {
  height: 250,
  width: 250,
  margin: 'auto',
  backgroundColor: 'white',
  textAlign: 'center',
  display: 'block',
    webKitBorderRadius: 250,
    MozBorderRadius: 250,
    borderRadius: 250,
    marginTop: 8,
    boxShadow: '1px 1px 1px 1px #1f1f1f , -1px 1px 1px 1px #1f1f1f , 1px -1px 1px 1px #1f1f1f , -1px -1px 1px 1px #1f1f1f , 3px 3px 3px 3px #3a3a3a, -3px 3px 3px 3px #3a3a3a, 3px -3px 3px 3px #3a3a3a, -3px -3px 3px 3px #3a3a3a',
};

const styleTurntableContainer = {
  height: '90%',
  width: '70%',
  margin: 0,
  marginTop: 10,
  marginBottom: 25,
  textAlign: 'center',
  display: 'inline-block',
    padding: 0,
};

const styleTurntable = {
  float: 'left',
  height: '100%',
  width: '100%',
  margin: 0,
  marginTop: 10,
  textAlign: 'center',
  display: 'inline-block',
//   backgroundColor: '#1f1f1f',
  paddingBottom: 380,

  webKitBorderRadius: 10,
  MozBorderRadius: 10,
  borderRadius: 10,
  webKitBoxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',
  MozBoxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',
  boxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',

};

const styleTurntableControls = {
  width: '100%',
  height: 90,
  paddingTop: 25,
  paddingBottom: 25,
};

const styleStartStopBtn = {
//   float: 'right',
  textAlign: 'center',
  //display: 'inline-block',
  backgroundColor: '#444444',
  padding: 5,
  marginLeft: 20,
};

const style = {
    root: {
     marginTop: 0,
    display: 'flex',
    justifyContent: 'space-around',
    height: 65,
    marginBottom: 7,
    },
  deckSpeed: {
    marginBottom: 15,
    marginLeft: '-12px',
    color: '#009ab2',
    height: 10
  },
  speedControl: {
    position: 'absolute',
    bottom: 0,
    left: '80%'
  },
  player: {
    borderRadius: '50%',
    margin: 'auto',
    marginTop: '20%',
    backgroundColor: 'white',
    textAlign: 'center',
    display: 'block',
    }
};


class Turntable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        // inputValue: 1

        played: 0,
        loaded: 0,
        duration: 0,
        // fileUpload: {url: null, name: ''},
        open: false
    }

    this.onSeekMouseDown = e => {
        this.setState({ seeking: true })
    }
    this.onSeekChange = e => {
        this.setState({ played: parseFloat(e.target.value) })
    }
    this.onSeekMouseUp = e => {
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
    }

    this.onProgress = state => {
        // Slider should only update if not seeking
        if (!this.state.seeking) {
        this.setState(state)
        }
    }



    this.handleDrop = (acceptedFiles, rejectedFiles) => {

    const file = acceptedFiles[0].preview;
    const thisDeck = document.getElementById(this.props.deckNum);

    const audio = thisDeck.getElementsByTagName("AUDIO")[0];


    console.log('file = ', file)


    const upload = {

          url: '../dj-react/' + file,
          name: acceptedFiles[0].name,
          title: acceptedFiles[0].name,
          cover: "../dj-react/assets/images/djR-vinyl-label.jpg",
          //cover: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ytimg.com%2Fvi%2FJOD-M7WZkZQ%2Fhqdefault.jpg&f=1",
          format: acceptedFiles[0].type,
          size: acceptedFiles[0].size,
      }

    // //handleSongUpload(upload);

    this.props.selectSong(upload, this.props.deckNum);

    }
}


    render() {

    const {
        played, loaded, duration,
        soundcloudConfig,
        vimeoConfig,
        youtubeConfig,
        fileConfig
    } = this.state

        const deckNum = this.props.deckNum;

        function crossfade(value, deckNum) {

     // equal-power crossfade
            if (deckNum === '_DECK1') {

                return Math.cos(value * 0.5*Math.PI);
            } else {
                return Math.cos((1.0-value) * 0.5*Math.PI);
             }
         }

        let startStopClass = classnames('startStopButton2', {'active': this.props.play});
        let deckClassNames = classnames(this.props.deckNum)
        let platterClassNames = classnames('platter', 'player-container', {'spinPlatter': this.props.play})

        return (
            <div className={this.props.className} style={styleTurntableContainer}>
                <MuiThemeProvider>
                    <div className="turntable"
                        style={styleTurntable}
                        children={<div>
                            <input
                                type='range' min={0} max={1} step='any'
                                className="seek"
                                value={played}
                                onMouseDown={this.onSeekMouseDown}
                                onChange={this.onSeekChange}
                                onMouseUp={this.onSeekMouseUp}
                                />
                                <Dropzone ref="dropzone"
                                            style={{height: "100%"}}
                                            onDrop={this.handleDrop}
                                            disableClick={true}
                                            >
                                    <Paper
                                        className={deckClassNames}
                                        style={styleDeck}
                                        zDepth={1}
                                        rounded={false}
                                        children={<div>
                                            <Paper
                                                className={platterClassNames}
                                                style={stylePlatter1}
                                                zDepth={2}
                                                circle={true}
                                                children={<div
                                                //className="drop_zone"
                                                //onDrop={this.handleDrop}
                                                //onDragOver="dragover_handler(event)"
                                                >
                                                {/*<audio id="audio_player" src={this.props.song.url} controls/>*/}
                                                    <ReactPlayer
                                                        id={this.props.deckNum}
                                                        ref={player => { this.player = player }}
                                                        className="player"
                                                        //playing={true}
                                                        loop={this.props.song.name === '' ? true : false}
                                                        url={this.props.song.url}
                                                        playbackRate={this.props.speed}
                                                        volume={crossfade(this.props.xFade, deckNum)}
                                                        playing={this.props.play}
                                                        hidden={true}
                                                        //width={150}
                                                        //height={150}
                                                        //style={style.player}
                                                        crossorigin='use-credentials'
                                                        onBuffer={() => console.log('onBuffer')}
                                                        onEnded={() => this.props.startStopSong(this.props.deckNum)}
                                                        onError={err => console.log('onError', err)}
                                                        onProgress={this.onProgress}
                                                        //onDuration={duration => this.setState({ duration })}
                                                        />
                                                        {/*<div
                                                            className="artist-info">
                                                            <h4 className="artist-name">Artist:
                                                                {this.props.song.title}
                                                            </h4>
                                                        </div>*/}

                                                        <div className="player-cover">
                                                            {this.props.song.name === '' ? <h4 className="start-info">Drop files here to get started</h4> :
                                                            <img src={this.props.song.cover} style={styleImg}/>}
                                                        </div>

                                                        {/*<div className="song-info">
                                                            <h4 className="artist-song-name">Song:
                                                                {this.props.song.name}
                                                            </h3>
                                                        </div>*/}
                                                    </div>}
                                                />
                                            </div>
                                            }
                                        />
                                        </Dropzone>
                    <div className="player-options" style={styleTurntableControls}>
                    <div className="player-buttons player-controls">
                    <div className="container_button2">
                            <div className="hole2">
                                <div className={startStopClass} onTouchTap={() => this.props.startStopSong(this.props.deckNum)}>
                                    {/*<img className="startStopImg" src="/assets/images/start-stopbutton.jpg" />*/}
                                    &#xf04b; &#xf04c;
                                </div>
                            </div>
                        </div>
                        {/*<div className="container_button">
                            <div className="hole">
                                <div className="startStopButton" onTouchTap={() => this.props.startStopSong(this.props.deckNum)}>
                                    <div className="triangle" ></div>
                                    <div className="lighter_triangle"></div>
                                    <div className="darker_triangle"></div>
                                </div>
                            </div>
                        </div>*/}
                        </div>
                        <div className="speedFader col-lg-1 col-lg-offset-0 col-md-1 col-md-offset-0 col-sm-1 col-sm-offset-0 col-xs-1 col-xs-offset-0"
                        style={style.speedControl}>
                            <label htmlFor="deckSpeed" style={style.deckSpeed} className="deckSpeedLabel">Speed</label>
                            <Fader className="deckSpeed" axis="y" min={0.13} max={1} defaultValue={this.props.speed/2} style={style.root} onChange={(event, value) => this.props.handlePlaybackSpeed(value, this.props.deckNum)} />
                        </div>
                    </div>
                </div>}>
          </div>
        </MuiThemeProvider>
        {/*<Snackbar
                open={this.state.open}
                message="Success!"
                autoHideDuration={2000}
                contentStyle={{color: "#22bcd4"}}
                style={{border: "2px solid #22bcd4"}}
            />*/}
            </div>

        )
    }
}

// function mapStateToProps(state) {
//     return {
//         //xFade: state.decksReducer.xFade,
//         song: state.decksReducer.deck1.activeSong,
//         play: state.decksReducer.deck1.play,
//         speed: state.decksReducer.deck1.speed,
//         volume: state.decksReducer.deck1.volume,
//         treble: state.decksReducer.deck1.treble,
//         mid: state.decksReducer.deck1.mid,
//         bass: state.decksReducer.deck1.bass,
//         //lpFilterBypass: state.decksReducer.deck1.lpFilterBypass,
//         lpFilterCutoff: state.decksReducer.deck1.lpFilterCutoff,
//         lpFilterRes: state.decksReducer.deck1.lpFilterRes,
//         //hpFilterBypass: state.decksReducer.deck1.hpFilterBypass,
//         hpFilterCutoff: state.decksReducer.deck1.hpFilterCutoff,
//         hpFilterRes: state.decksReducer.deck1.hpFilterRes,
//         //reverbBypass: state.decksReducer.deck1.reverbBypass,
//         reverbMix: state.decksReducer.deck1.reverbMix,
//         delay: state.decksReducer.deck1.delay,
//         distortion: state.decksReducer.deck1.distortion,
//         bitCrusherBypass: state.decksReducer.deck1.bitCrusherBypass,
//         bits: state.decksReducer.deck1.bits,
//         normFreq: state.decksReducer.deck1.normFreq,
//         bufferSize: state.decksReducer.deck1.bufferSize,
//         //delayBypass: state.decksReducer.deck1.delayBypass,
//         delayTime: state.decksReducer.deck1.delayTime,
//         delayMix: state.decksReducer.deck1.delayMix,
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         handlePlaybackSpeed: actions.handlePlaybackSpeed,
//         startStopSong: actions.startStopSong,
//         handleVolumeChange: actions.handleVolumeChange,
//         handleTrebleControl: actions.handleTrebleControl,
//         handleMidControl: actions.handleMidControl,
//         handleBassControl: actions.handleBassControl,
//         handleLpFilterCutoffChange: actions.handleLpFilterCutoffChange,
//         handleLpFilterResChange: actions.handleLpFilterResChange,
//         handleHpFilterCutoffChange: actions.handleHpFilterCutoffChange,
//         handleHpFilterResChange: actions.handleHpFilterResChange,
//         handleReverbMixChange: actions.handleReverbMixChange,
//         handleDelayChange: actions.handleDelayChange,
//         handleDistortionChange: actions.handleDistortionChange,
//         handleBitCrusherBypassChange: actions.handleBitCrusherBypassChange,
//         handleBitChange: actions.handleBitChange,
//         handleNormFreqChange: actions.handleNormFreqChange,
//         handleBufferSizeChange: actions.handleBufferSizeChange,
//         handleDelayTimeChange: actions.handleDelayTimeChange,
//         handleDelayMixChange: actions.handleDelayMixChange,
//         },
//         dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Turntable);

export default Turntable;

