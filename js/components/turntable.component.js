import React from 'react';

import classnames from 'classnames';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import ReactPlayer from 'react-player';

import Fader from './fader.component';


const styleDeck1 = {
  height: '100%',
  width: '100%',
  //margin: 20,
  marginTop: 40,
  // float: 'left',
  backgroundColor: '#1f1f1f',
  textAlign: 'center',
  display: 'inline-block',
};

const styleImg = {
  height: '100%',
  width: '100%',
  //margin: 20,
//   marginBottom: 30,
  // float: 'left',
  backgroundColor: '#1f1f1f',
  textAlign: 'center',
  display: 'inline-block',
};

const stylePlatter1 = {
  height: 250,
  width: 250,
  margin: 'auto',
//   marginTop: 40,
  backgroundColor: 'white',
  textAlign: 'center',
  display: 'block',
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
//   border: '2px solid #00bcd4'
};

const styleTurntableControls = {
//   float: 'right',
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#444444',
  paddingBottom: 8,
  marginLeft: 15
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
    //   float: 'right',
    // marginLeft: '100%',
    position: 'absolute',
    bottom: 0,
  },
  player: {
        borderRadius: '50%',
        height: 250,
  width: 250,
  margin: 'auto',
  marginTop: '25%',
//   marginTop: 40,
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


}


    render() {

        let startStopClass = classnames('fa', {'fa-pause': this.play}, {'fa-play': !this.play});

        if (!this.props.song) {
            return <div name={this.props.name} className={this.props.className} style={styleTurntableContainer}>
                <MuiThemeProvider>
                    <div className="turntable" style={styleTurntable} children={<div><Paper className="deck1 col-lg-6" style={styleDeck1} zDepth={0} rounded={false} children={<div><Paper className="platter" style={stylePlatter1} zDepth={4} circle={true} children={<div className="player-container col-lg-6 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2"><h4 className="start-info">Select a song to get started</h4></div>} /></div>} />
                    <div className="player-options col-lg-6 col-md-6 col-sm-6">
                    <div className="player-buttons player-controls"  >
                        <button onTouchTap={() => this.props.startStopSong(this.props.deckNum)} style={styleTurntableControls} className="player-btn big" title="Start/Stop">Start/Stop
                            <i className={startStopClass} />
                        </button>
                        </div>
                        <div className="speedFader col-lg-1 col-lg-offset-6 col-md-1 col-md-offset-6 col-sm-1 col-sm-offset-8 col-xs-1 col-xs-offset-6" style={style.speedControl}>
                            <label htmlFor="deckSpeed" style={style.deckSpeed} className="deckSpeedLabel">Speed</label>
                            <Fader className="deckSpeed" defaultValue={this.props.speed/2} style={style.root} onChange={(event, value) => this.props.handlePlaybackSpeed(value, this.props.deckNum)} />
                    </div>

                </div></div>}>
          </div>
        </MuiThemeProvider>
            </div>;
        }





        return (
            <div className={this.props.className} style={styleTurntableContainer}>
                <MuiThemeProvider>
                    <div className="turntable" style={styleTurntable} children={<div><Paper className="deck1" style={styleDeck1} zDepth={0} rounded={false} children={<div><Paper className="platter player-container" style={stylePlatter1} zDepth={4} circle={true} children={<div><ReactPlayer className="player-cover" url={this.props.song.url} playbackRate={this.props.speed} volume={this.props.volume} playing={this.props.play} hidden={false} width="50%" height="50%" style={style.player} /><div className="artist-info col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
                    <h2 className="artist-name">Artist: {this.props.song.artist.name}</h2>
                </div>

                <div className={"player-cover col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2"}>
                    <img src={this.props.song.cover} style={styleImg}/>
                </div>

                <div className="song-info col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
                    <h3 className="artist-song-name">Song: {this.props.song.artist.song}</h3>
                </div></div>} /> </div>} />
                    <div className="player-options col-lg-6 col-md-6 col-sm-6">
                    <div className="player-buttons player-controls" >
                        <button onTouchTap={() => this.props.startStopSong(this.props.deckNum)} style={styleTurntableControls} className="player-btn big" title="Start/Stop">Start/Stop
                            <i className={startStopClass} />
                        </button>
                        </div>
                        <div className="speedFader col-lg-1 col-lg-offset-11 col-md-1 col-md-offset-8 col-sm-1 col-sm-offset-12 col-xs-1 col-xs-offset-8" style={style.speedControl}>
                            <label htmlFor="deckSpeed" style={style.deckSpeed} className="deckSpeedLabel">Speed</label>
                            <Fader className="deckSpeed" style={style.root} onChange={(event, value) => this.props.handlePlaybackSpeed(value, this.props.deckNum)} value={this.props.speed/2} defaultValue={this.props.speed/2}/>
                    </div>

                </div></div>}>
          </div>
        </MuiThemeProvider>
            </div>

        )
    }
}

export default Turntable;

