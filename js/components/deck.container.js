import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { startStopSong } from '../actions/index.action';


class Deck extends Component {
    constructor(props) {
        super(props);

    //    this.state = {
    //     current: 0,
    //     progress: 0,
    //     repeat: false,
    //     mute: false,
    //     play: this.props.autoplay || false,
    // }

    // this.componentDidMount = () => {
    //     let playerElement = this.refs.player;
    //     playerElement.addEventListener('timeupdate', this.updateProgress);
    //     playerElement.addEventListener('ended', this.end);
    //     playerElement.addEventListener('error', this.next);
    // }

    // this.componentWillUnmount = () => {
    //     let playerElement = this.refs.player;
    //     playerElement.removeEventListener('timeupdate', this.updateProgress);
    //     playerElement.removeEventListener('ended', this.end);
    //     playerElement.removeEventListener('error', this.next);
    // }

    // this.setProgress = (e) => {
    //     let target = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target;
    //     let width = target.clientWidth;
    //     let rect = target.getBoundingClientRect();
    //     let offsetX = e.clientX - rect.left;
    //     let duration = this.refs.player.duration;
    //     let currentTime = (duration * offsetX) / width;
    //     let progress = (currentTime * 100) / duration;

    //     this.refs.player.currentTime = currentTime;
    //     this.setState({ progress: progress });
    //     this.play();
    // }

    // this.updateProgress = () => {
    //     let duration = this.refs.player.duration;
    //     let currentTime = this.refs.player.currentTime;
    //     let progress = (currentTime * 100) / duration;

    //     this.setState({ progress: progress });
    // }

    // this.play = () => {
    //     this.setState({ play: true });
    //     this.refs.player.play();
    // }

    // this.play = () => {
    //     //this.props.play = true;
    //     this.refs.player.play();
    // }


    // this.pause = () => {
    //     //this.props.play = false;
    //     this.refs.player.pause();
    // }

    // this.toggle = () => this.props.play ? this.pause() : this.play();

    // this.end = () => {
    //     this.props.play = false;
    // }

    }
    render() {

        // let coverClass = classnames('player-cover', {'no-height': !!!this.props.song.cover });
        let startStopClass = classnames('fa', {'fa-pause': this.play}, {'fa-play': !this.play});
        // let randomClass = classnames('player-btn small random', {'activeSong': this.state.random });

        if (!this.props.song) {
            return <div className="player-container col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2"><h4 className="start-info">Select a song to get started</h4></div>;
        }
        return (
            <div className="player-container col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
                <audio src={this.props.song.url} autoPlay={this.props.play} playbackRate={2} preload="auto" ref="player"></audio>

                {/*<div className={coverClass} style={{backgroundImage: 'url('+ this.props.song.cover  +')'}}></div>*/}

                <div className="artist-info col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
                    <h2 className="artist-name">Artist: {this.props.song.artist.name}</h2>
                    {/*<h3 className="artist-song-name">Song: {this.props.song.artist.song}</h3>*/}
                </div>

                <div className={"player-cover col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2"}>
                    <img src={this.props.song.cover} />
                </div>

                <div className="song-info col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
                    {/*<h2 className="artist-name">Artist: {this.props.song.artist.name}</h2>*/}
                    <h3 className="artist-song-name">Song: {this.props.song.artist.song}</h3>
                </div>

                {/*<div className="player-progress-container col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2"  onClick={this.setProgress}>
                    <span className="player-progress-value" style={{width: this.progress + '%'}}></span>
                </div>*/}

                <div className="player-options col-lg-12 col-md-12 col-sm-12">
                    <div className="player-buttons player-controls">
                        <button onTouchTap={this.toggle} className="player-btn big" title="Start/Stop">Start/Stop
                            <i className={startStopClass} />
                        </button>

                    </div>

                </div>

            </div>
        );
    }
}
/*
return (
            <div className="player-container">
                <audio src={activeSong.url} autoPlay={this.state.play} preload="auto" ref="player"></audio>

                <div className={coverClass} style={{backgroundImage: 'url('+ activeSong.cover +')'}}></div>

                <div className="artist-info">
                    <h2 className="artist-name">Artist: {this.props.song.artist.name}</h2>
                    <h3 className="artist-song-name">Song: {this.props.song.artist.song}</h3>
                </div>

                <div className="player-progress-container" onClick={this.setProgress}>
                    <span className="player-progress-value" style={{width: progress + '%'}}></span>
                </div>


                <div className="player-options">
                    <div className="player-buttons player-controls">
                        <button onClick={this.toggle} className="player-btn big" title="Play/Pause">Play/Pause
                            <i className={playPauseClass} />
                        </button>

                        <button onClick={this.previous} className="player-btn medium" title="Previous Song">Previous
                            <i className="fa fa-backward" />
                        </button>

                        <button onClick={this.next} className="player-btn medium" title="Next Song">Next
                            <i className="fa fa-forward" />
                        </button>
                    </div>

                    <div className="player-buttons">
                        <button className="player-btn small volume" onClick={this.toggleMute} title="Mute/Unmute">Mute
                            <i className={volumeClass} />
                        </button>

                        <button className={repeatClass} onClick={this.repeat} title="Repeat">Repeat
                            <i className="fa fa-repeat" />
                        </button>
                    </div>

                </div>
            </div>
        );
    }
}*/

function mapStateToProps(state) {
    return {
        song: state.activeSong,
        play: state.play
    };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({startStopSong: startStopSong}, dispatch)
// }

export default connect(mapStateToProps)(Deck);

// export default Deck;