import React from 'react';

import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import ReactPlayer from 'react-player';





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
  width: '75%',
  margin: 0,
  marginTop: 10,
  textAlign: 'center',
  display: 'inline-block',
//   backgroundColor: '#1f1f1f',
  paddingBottom: 450,
//   border: '2px solid #00bcd4'
paddingRight: 0,
marginRight: -2
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
  float: 'right',
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#444444',
  paddingBottom: 8,
  marginLeft: 15
};

const style = {
    root: {
        float: 'right',
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
    //   marginLeft: 5,
      float: 'right',
      color: '#009ab2',
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-around',
     height: 10
  },
  speedControl: {
      float: 'right',
    // marginLeft: '100%',
    position: 'absolute',
    bottom: 0
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


}


    render() {

        let startStopClass = classnames('fa', {'fa-pause': this.play}, {'fa-play': !this.play});

        return (
            <div className="turntable-container col-lg-4 col-md-4 col-sm-8 col-xs-8" style={styleTurntableContainer}>
                <MuiThemeProvider>
                    <div className="turntable" style={styleTurntable} children={<div><Paper className="deck1" style={styleDeck1} zDepth={0} rounded={false} children={<div><Paper className="platter player-container" style={stylePlatter1} zDepth={4} circle={true} children={<div><ReactPlayer className="player-cover" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playbackRate={this.props.speed} volume={this.props.volume} playing={this.props.play} hidden={false} width="50%" height="50%" style={style.player} /><div className="artist-info col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
                    <h2 className="artist-name">Artist: Artist Name</h2>
                </div>

                <div className="song-info col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
                    <h3 className="artist-song-name">Song: Song</h3>
                </div></div>} /> </div>} />
                    <div className="player-options col-lg-6 col-md-6 col-sm-6">
                    <div className="player-buttons player-controls" >
                        <button style={styleTurntableControls} className="player-btn big" title="Start/Stop">Start/Stop
                            <i className={startStopClass} />
                        </button>
                        </div>

                </div></div>}>
          </div>
        </MuiThemeProvider>
            </div>

        )
    }
}

export default Turntable;

