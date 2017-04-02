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

import Loader from './loader.component';



const styleDeck = {
    height: 266,
    width: 266,
    marginTop: 15,
    backgroundColor: '#1f1f1f',
    textAlign: 'center',
    display: 'inline-block',
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
    marginTop: 5,
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
    textAlign: 'center',
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
        played: 0,
        loaded: 0,
        duration: 0,
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
            // console.log('progress state = ', state);
            this.setState(state)
        }
    }

    this.handleDrop = (acceptedFiles, rejectedFiles) => {

        const file = acceptedFiles[0];

        // const url = file.preview.replace(^('blob:http://localhost:8080/')\s+);

        const pathArray = file.preview.split( '/' );

        console.log(pathArray);

        const url = `${pathArray[0]}//${pathArray[2]}/dj-react/${pathArray[3]}`

        console.log(url);


        const upload = {
            url: url,
            name: file.name,
            title: file.name,
            cover: "../dj-react/assets/images/djR-vinyl-label.jpg",
            format: file.type,
            size: file.size,
        }
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

        let loaderClass = classnames('loader', 'deckLoader', {'hide': !this.props.buffering});
        let startStopClass = classnames('startStopButton2', {'active': this.props.play});
        let deckClassNames = classnames(this.props.deckNum)
        let platterClassNames = classnames('platter', 'player-container', {'spinPlatter': this.props.play})

        return (
            <div className={this.props.className} style={styleTurntableContainer}>
                <MuiThemeProvider>
                    <div className="turntable"
                        style={styleTurntable}
                        children={
                            <div>
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
                                                children={<div>
                                                    <ReactPlayer
                                                        id={this.props.deckNum}
                                                        ref={player => { this.player = player }}
                                                        className="player"
                                                        loop={this.props.song.name === '' ? true : false}
                                                        url={this.props.song.url}
                                                        playbackRate={this.props.speed}
                                                        volume={this.props.volume}
                                                        playing={this.props.play}
                                                        hidden={true}
                                                        crossOrigin='anonymous'
                                                        onBuffer={() => console.log('onBuffer')}
                                                        onReady={() => this.props.handleBufferEnd(this.props.deckNum)}
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
                                                            <Loader className={loaderClass} size={105} />
                                                            {this.props.song.name === '' ? <h4 className="start-info">Drop files here or search</h4> :
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
                                    &#xf04b; &#xf04c;
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="speedFader col-lg-1 col-lg-offset-0 col-md-1 col-md-offset-0 col-sm-1 col-sm-offset-0 col-xs-1 col-xs-offset-0"
                            style={style.speedControl}>
                                <label 
                                    htmlFor="deckSpeed"
                                    style={style.deckSpeed}
                                    className="deckSpeedLabel">
                                    Speed
                                </label>
                                <Fader
                                    className="deckSpeed"
                                    axis="y"
                                    min={0.13}
                                    max={1}
                                    defaultValue={this.props.speed/2}
                                    style={style.root}
                                    onChange={(event, value) => this.props.handlePlaybackSpeed(value, this.props.deckNum)}
                                />
                        </div>
                    </div>
                </div>}>
          </div>
        </MuiThemeProvider>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        // buffering: state.decksReducer.deck1.buffering,
        // song: state.decksReducer.deck1.activeSong,
        // play: state.decksReducer.deck1.play,
        // speed: state.decksReducer.deck1.speed,
        // volume: state.decksReducer.deck1.volume,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        handleBufferStart: actions.handleBufferStart,
        handleBufferEnd: actions.handleBufferEnd,
        // handlePlaybackSpeed: actions.handlePlaybackSpeed,
        // startStopSong: actions.startStopSong,
        // handleVolumeChange: actions.handleVolumeChange,
        },
        dispatch);

}


export default connect(mapStateToProps, mapDispatchToProps)(Turntable);

// export default Turntable;

