import React from 'react';

import classnames from 'classnames';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import ReactPlayer from 'react-player';

import Fader from './fader.component';


const styleDeck1 = {
  height: 265,
  width: 265,
  //margin: 20,
  marginTop: 40,
  // float: 'left',
  backgroundColor: '#1f1f1f',
  textAlign: 'center',
  display: 'inline-block',
  backgroundImage: 'linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    backgroundImage:' -o-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    backgroundImage: '-moz-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    backgroundImage: '-webkit-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    backgroundImage: '-ms-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    webKitBorderRadius: 265,
    MozBorderRadius: 265,
    borderRadius: 265,
    webKitBoxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',
    MozBoxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',
    boxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',
};

const styleImg = {
  height: '100%',
  width: '100%',
  //margin: 20,
//   marginBottom: 30,
  // float: 'left',
  backgroundColor: '#1f1f1f',
  textAlign: 'center',
  //marginLeft: '25%',
  //display: 'inline-block',
  //margin: 'auto',
};

const stylePlatter1 = {
  height: 250,
  width: 250,
  margin: 'auto',
//   marginTop: 40,
  backgroundColor: 'white',
  textAlign: 'center',
  display: 'block',
  backgroundImage: 'linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    backgroundImage:' -o-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    backgroundImage: '-moz-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    backgroundImage: '-webkit-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    backgroundImage: '-ms-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    webKitBorderRadius: 250,
    MozBorderRadius: 250,
    borderRadius: 250,
    webKitBoxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a',
    MozBoxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a',
    boxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a',
};

const styleTurntableContainer = {
//   float: 'left',
  height: '100%',
  width: '70%',
  margin: 0,
  marginTop: 10,
  textAlign: 'center',
  display: 'inline-block',
//   backgroundColor: '#1f1f1f',
    padding: 0,
  paddingBottom: 450,
//   border: '2px solid #00bcd4'
// paddingRight: 0,
// marginRight: -2
};

const styleTurntable = {
  float: 'left',
  height: 350,
  width: '100%',
  margin: 0,
  marginTop: 10,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#1f1f1f',
  paddingBottom: 410,

  
    // borderBottom:'10px solid #0c0c0c',
    // borderRight:'2px solid #090909',
    // borderRadius:'1px',
    // WebkitBorderRadius:'1px',
    // MozBorderRadius:'1px',


    backgroundImage: 'linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    backgroundImage:' -o-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    backgroundImage: '-moz-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    backgroundImage: '-webkit-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    backgroundImage: '-ms-linear-gradient(bottom, rgb(82,79,82) 0%, rgb(134,134,134) 57%)',
    webKitBorderRadius: 10,
    MozBorderRadius: 10,
    borderRadius: 10,
    webKitBoxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',
    MozBoxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',
    boxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',

};

const styleTurntableControls = {
//   float: 'right',
  //textAlign: 'center',
  //display: 'inline-block',
  //backgroundColor: '#444444',
  //paddingBottom: 8,
  //marginLeft: 0
  width: '100%',
  height: 100
};

const styleStartStopBtn = {
//   float: 'right',
  textAlign: 'center',
  //display: 'inline-block',
  backgroundColor: '#444444',
  padding: 5,
  marginLeft: 20
};

const style = {
    root: {
        // float: 'right',
        marginTop: 0,
        display: 'flex',
    // // height: 124,
    // flexDirection: 'row',
    justifyContent: 'space-around',
    height: 80,
    marginBottom: 40,
    // marginLeft: 500,
    },
  deckSpeed: {
      marginBottom: 15,
    //   marginRight: 5,
    //   float: 'right',
      color: '#009ab2',
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-around',
     height: 10
  },
  speedControl: {
    //float: 'right',
    //marginRight: 50,
    //marginBottom: 100,
    position: 'absolute',
    bottom: 10,
    left: '75%'
  },
  player: {
        borderRadius: '50%',
        height: 250,
  width: 250,
  margin: 'auto',
  marginTop: '25%',
  backgroundColor: 'white',
  textAlign: 'center',
  display: 'block',
    }
};


class Turntable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        inputValue: 1
    }
    
function onStart() {
    //this.props.startStopSong(this.props.deckNum)
    let decks = document.getElementsByClassName('platter')
    decks.classList.add('spin-platter');
    }
}



    render() {

        let startStopClass = classnames('fa', {'fa-pause': this.play}, {'fa-play': !this.play});
        let platterClassNames = classnames('platter', 'player-container', {'spinPlatter': this.props.play})

        if (!this.props.song) {
            return (
            <div name={this.props.name} className={this.props.className} style={styleTurntableContainer}>
                <MuiThemeProvider>
                    <div className="turntable" style={styleTurntable} children={<div><Paper className="deck1 col-lg-6" style={styleDeck1} zDepth={0}
                    rounded={false} children={<div><Paper className={platterClassNames} style={stylePlatter1} zDepth={4} circle={true}
                    children={<div className="player-container">
                        <h4 className="start-info">Select a song to get started</h4></div>} /></div>} />
                    <div className="player-options" style={styleTurntableControls}>
                    <div className="player-buttons player-controls"  >
                        <button onTouchTap={() => this.props.startStopSong(this.props.deckNum)} style={styleStartStopBtn}
                            className="player-btn big" title="Start/Stop">Start/Stop
                            <i className={startStopClass} />
                        </button>
                        </div>
                        <div className="speedFader col-lg-1 col-lg-offset-0 col-md-1 col-md-offset-0 col-sm-1 col-sm-offset-0 col-xs-1 col-xs-offset-0"
                        style={style.speedControl}>
                            <label htmlFor="deckSpeed" style={style.deckSpeed} className="deckSpeedLabel">Speed</label>
                            <Fader className="deckSpeed" defaultValue={this.props.speed/2} style={style.root} onChange={(event, value) => this.props.handlePlaybackSpeed(value, this.props.deckNum)} />
                        </div>
                    </div>
                </div>}>
          </div>
        </MuiThemeProvider>
            </div>
            )
        }





        return (
            <div className={this.props.className} style={styleTurntableContainer}>

                <MuiThemeProvider>
                    <div className="turntable"
                        style={styleTurntable}
                        children={<div>
                                    <Paper
                                        className={this.props.deckNum}
                                        style={styleDeck1}
                                        zDepth={0}
                                        rounded={false}
                                        children={<div>
                                            <Paper
                                                className={platterClassNames}
                                                style={stylePlatter1}
                                                zDepth={4}
                                                circle={true}
                                                children={<div>
                                                    <ReactPlayer
                                                        ref="player"
                                                        className="player"
                                                        //url="https://soundcloud.com/mikemaio/the-caves"
                                                        playing={true}
                                                        url={this.props.song.url}
                                                        playbackRate={this.props.speed}
                                                        volume={this.props.volume}
                                                        playing={this.props.play}
                                                        hidden={true}
                                                        width={0}
                                                        height={0}
                                                        style={style.player}
                                                        crossorigin='use-credentials' />
                                                        <div
                                                            className="artist-info">
                                                            <h2 className="artist-name">Artist:
                                                                {this.props.song.artist.name}
                                                            </h2>
                                                        </div>

                                                        <div className="player-cover">
                                                            <img src={this.props.song.cover} style={styleImg}/>
                                                        </div>

                                                        <div className="song-info">
                                                            <h3 className="artist-song-name">Song:
                                                                {this.props.song.artist.song}
                                                            </h3>
                                                        </div>
                                                    </div>}
                                                />
                                            </div>}
                                        />
                    <div className="player-options" style={styleTurntableControls}>
                    <div className="player-buttons player-controls">
                        <div className="container_button">
                            <div className="hole">
                                <div className="startStopButton" onTouchTap={() => this.props.startStopSong(this.props.deckNum)}>
                                    <div className="triangle" ></div>
                                    <div className="lighter_triangle"></div>
                                    <div className="darker_triangle"></div>
                                </div>
                            </div>
                        </div>
                        {/*<button onTouchTap={() => this.props.startStopSong(this.props.deckNum)} style={styleStartStopBtn}
                            className="player-btn big" title="Start/Stop">Start/Stop
                            <i className={startStopClass} />
                        </button>*/}
                        </div>
                        <div className="speedFader col-lg-1 col-lg-offset-0 col-md-1 col-md-offset-0 col-sm-1 col-sm-offset-0 col-xs-1 col-xs-offset-0"
                        style={style.speedControl}>
                            <label htmlFor="deckSpeed" style={style.deckSpeed} className="deckSpeedLabel">Speed</label>
                            <Fader className="deckSpeed" defaultValue={this.props.speed/2} style={style.root} onChange={(event, value) => this.props.handlePlaybackSpeed(value, this.props.deckNum)} />
                        </div>
                    </div>
                </div>}>
          </div>
        </MuiThemeProvider>
            </div>

        )
    }
}

export default Turntable;

