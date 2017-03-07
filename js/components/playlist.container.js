import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectSong} from '../actions/index.action';
import {bindActionCreators} from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

const styles = {
    playlist: {
    display: 'block',
    float: 'right'
},
    button: {
        marginTop: 20
    }
}

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class Playlist extends React.Component {

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
          className="col-lg-3 col-lg-offset-5"
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