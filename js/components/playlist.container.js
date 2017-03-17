import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectSong} from '../actions/index.action';
import {handleSongUpload} from '../actions/index.action';
import {bindActionCreators} from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import Dropzone from 'react-dropzone';
import DropzoneDemo from './dropzone.component';

import classnames from 'classnames';


import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


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


class Playlist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        open: false,
        clicked: false,
        files: []
    };
  }

    renderList() {
        return this.state.files.map((song) => {
            return (
                <li
                    key={song.name}
                    className="list-group-item"
                    //onTouchTap={() => this.props.selectSong(song, '_DECK1')}
                    >
                    {song.name}
                    <button onTouchTap={() => this.props.selectSong(song, '_DECK1')}>LOAD TO DECK 1</button>
                    <button onTouchTap={() => this.props.selectSong(song, '_DECK2')}>LOAD TO DECK 2</button>
                </li>
            );
        });
}


onDrop(acceptedFiles, rejectedFiles) {
    //   console.log('Accepted files: ', acceptedFiles);
    //   console.log('Rejected files: ', rejectedFiles);

      let upload = {
          url: acceptedFiles[0].preview,
          name: acceptedFiles[0].name,
          cover: acceptedFiles[0].cover || null,
          format: acceptedFiles[0].type,
          size: acceptedFiles[0].size,
      }
      console.log('upload = ', upload);
      console.log('state = ', this.state);
      this.setState({
        files: upload
      });
    //handleSongUpload(acceptedFiles[0]);
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
                <DropzoneDemo>
                </DropzoneDemo>
                {/*<Dropzone
                    className="list-group"
                    onDrop={this.onDrop}
                    disableClick={true}
                    >
                    <ul className="list-group">
                        {this.renderList()}
                    </ul>
              <div>Drop files here to create a playlist</div>
            </Dropzone>*/}
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
    return bindActionCreators({selectSong: selectSong, handleSongUpload: handleSongUpload}, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(Playlist);


