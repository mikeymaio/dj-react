var React = require('react');
import { connect } from 'react-redux';
import {selectSong} from '../actions/index.action';
import {handleSongUpload} from '../actions/index.action';
import {bindActionCreators} from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
var Dropzone = require('react-dropzone');

import FileReaderInput from 'react-file-reader-input';


const styles = {
    playlist: {
    display: 'block',
},
    button: {
        // marginTop: 20,
        display: "block"
    },
    loadBtnGroup: {
        float: 'right',
    },
    load: {
        // float: 'right',
        backgroundColor: '#1f1f1f',
        fontSize: 10,
        // marginLeft: 5,
        // zIndex: 30
    }
}


var DropzoneDemo = React.createClass({
    getInitialState: function () {
        return {
          files: []
        };
    },

     handleChange(e, results) {
    results.forEach(result => {
      const [e, file] = result;
      let upload = {
          url: file.preview,
          name: file.name,
          cover: file.cover || null,
          format: file.type,
          size: file.size,
      }
      this.setState({
        files: [...this.state.files, upload]
      });
      console.log('result= ', result);
      console.log('file= ', file);
      this.props.handleSongUpload(upload);
      console.log(`Successfully uploaded ${file.name}!`);
    })
     },

onDrop(acceptedFiles, rejectedFiles) {

      var input = document.getElementById(`fileLoaderFor_DECK1`);
    console.log(input.files);
    var file = acceptedFiles[0].preview;
    var thisDeck = document.getElementById('_DECK1');
    var audio = thisDeck.getElementsByTagName("AUDIO")[0];

        // this.props.selectSong(
        //             {title: input.files[0].name,
        //             url: file,
        //             cover: null
        //             }, this.props.deckNum);

    audio.src= file;

    // this.player.url = file;
    console.log(file);

//var file = URL.createObjectURL(acceptedFiles[0]);
      let upload = {
          url: acceptedFiles[0].preview,
          name: acceptedFiles[0].name,
          cover: acceptedFiles[0].cover || null,
          format: acceptedFiles[0].type,
          size: acceptedFiles[0].size,
      }
      console.log('upload = ', upload);
      this.setState({
        files: [...this.state.files, acceptedFiles[0]]
      });
      
    //handleSongUpload(upload);
    console.log('state = ', this.state);
    },

 renderList() {
        return this.state.files.map((file) => {
            // return this.props.playlist.map((file) => {
            return (
                <li
                    key={file.name}
                    //onTouchTap={() => this.props.selectfile(file, '_DECK1')}
                    >
                    {file.name}
                    <div style={styles.loadBtnGroup}>
                    <button style={styles.load} onTouchTap={() => this.props.selectSong(file, '_DECK1')}>LOAD TO DECK 1</button>
                    <button style={styles.load} onTouchTap={() => this.props.selectSong(file, '_DECK2')}>LOAD TO DECK 2</button>
                    </div>
                </li>
            );
        });
},
    render () {

       
        return (
            <div className="list-group">
                 <div>
                <div id="list" className="left list-group-item" style={{"display": "inline-block"}}>
                    {/*<h5>Playlist</h5>*/}
                    {this.renderList()}
                </div>
                </div>
                <div className="right list-group-item dropzone" >
                <Dropzone ref="dropzone" style={{display: "inline-block", height: "100%"}} onDrop={this.onDrop} >
                    <div>Drop files here to build a set list</div>
                </Dropzone>
                {/*<form>
        <label htmlFor="my-file-input">Upload a File:</label>
        <FileReaderInput as="buffer" id="my-file-input"
                         onChange={this.handleChange}>
          <button onClick={(e) => e.preventDefault()} >Select a file!</button>
        </FileReaderInput>
      </form>*/}
                </div>
            </div>
        );
    }
});

function mapStateToProps(state){
    return {
        playlist: state.playlistReducer.playlist,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectSong: selectSong, handleSongUpload: handleSongUpload}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DropzoneDemo);