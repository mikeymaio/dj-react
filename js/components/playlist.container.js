import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectSong} from '../actions/index.action';
import {bindActionCreators} from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import classnames from 'classnames';

const styles = {
    playlist: {
    display: 'block',
},
    button: {
        // marginTop: 20,
        display: "block"
    },
    load: {
        float: 'right',
        backgroundColor: '#1f1f1f',
        marginLeft: 5,
    }
}

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

/*class Playlist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }
    renderList() {
        return this.props.playlist.map((song) => {
            return (
                <li
                    key={song.artist.song}
                    className="list-group-item"
                    //onTouchTap={() => this.props.selectSong(song, '_DECK1')}
                    >
                    {song.artist.song}
                    <button onTouchTap={() => this.props.selectSong(song, '_DECK1')}>LOAD TO DECK 1</button>
                    <button onTouchTap={() => this.props.selectSong(song, '_DECK2')}>LOAD TO DECK 2</button>
                </li>
            );
        });
}
  render() {
    return (
      <div>
        <RaisedButton
          style={styles.button}
          label="Playlist"
          className="col-lg-4 col-lg-offset-4"
          onTouchTap={() => this.setState({open: !this.state.open})}
        />
        <Drawer open={this.state.open}
            width={200}
            children={this.renderList()}>
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        playlist: state.playlistReducer.playlist,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectSong: selectSong}, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(Playlist);

*/

class Playlist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        open: false,
        clicked: false
    };
  }
    renderList() {
        return this.props.playlist.map((song) => {
            return (
                <li
                    key={song.artist.song}
                    className="list-group-item"
                    //onTouchTap={() => this.props.selectSong(song, '_DECK1')}
                    >
                    {song.artist.song}
                    <button style={styles.load} onTouchTap={() => this.props.selectSong(song, '_DECK1')}>LOAD TO DECK 1</button>
                    <button style={styles.load} onTouchTap={() => this.props.selectSong(song, '_DECK2')}>LOAD TO DECK 2</button>
                </li>
            );
        });
}
  render() {

      let playlistContainer = classnames({
          'playlist': true,
          'open': this.state.open,
          'close': !this.state.open && this.state.clicked
      })

    //   let playlistContainer = classnames('playlist', {"open": this.state.open}, {"close": !this.state.open})

      let playlistClass = classnames('slide', {'slide-up': !this.state.open})
    //   let playlistBtnClass = classnames( {'slide-up': !this.state.open}, {"open": this.state.open})
    return (
      <div className='playlistContainer'>
          <RaisedButton
                    style={styles.button}
                    label="Playlist"
                    className='col-lg-4 col-lg-offset-4 slider playlistBtn'
                    id="bot"
                    onTouchTap={() => this.setState({open: !this.state.open, clicked: true})}
                />

        <div id="playlist" className={playlistContainer}>
           <div id="nav" className={playlistClass}>
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        playlist: state.playlistReducer.playlist,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectSong: selectSong}, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(Playlist);


