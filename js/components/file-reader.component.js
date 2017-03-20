var React = require('react');
import { connect } from 'react-redux';
import {selectSong} from '../actions/index.action';
import {handleSongUpload} from '../actions/index.action';
import {bindActionCreators} from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
var Dropzone = require('react-dropzone');

//import FileReaderInput from 'react-file-reader-input';


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


class FileReader extends React.Component {
    constructor(props) {
        super(props)
    // getInitialState: function () {
    //     return {
    //       files: []
    //     };
    // },
}

componentDidMount() {
    //const e = document.getElementById( "drop_zone" )


//   e.addEventListener("drop", function (evt) {
//             evt.preventDefault();
//             evt.stopPropagation();

//             var files = evt.dataTransfer.files;
//             for (var i = 0, f; f = files[i]; i++) {
//                 var li = document.createElement('li');
//                 li.innerHTML = "<li>" + escape(f.name) + "</li>";
//                 document.getElementById('list').appendChild(li);
//             }

//             console.log("Dropped File");
//         }, false);
}





 renderList() {
        // return this.state.files.map((file) => {
            return this.props.playlist.map((file) => {
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
}

SelectAudio(files) {
    console.log(files);
                let file = files[0];
                if (file.type.match(/audio.*/)) {
                    var reader = new FileReader();
                    reader.onload = function(d) {
                        var e = document.createElement("audio");
                        e.src = d.target.result;
                        e.setAttribute("type", file.type);
                        e.setAttribute("controls", "controls");
                        e.setAttribute("autoplay", "true");
                        document.getElementById("container").appendChild(e);
                    };
                    reader.readAsDataURL(file);
                }
            }

            handleDrop(evt) {
            evt.preventDefault();
            evt.stopPropagation();

            var files = evt.dataTransfer.files;
            for (var i = 0, f; f = files[i]; i++) {
                var li = document.createElement('li');
                li.innerHTML = "<li>" + escape(f.name) + "</li>";
                document.getElementById('list').appendChild(li);
            }

            console.log("Dropped File");
}
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
                {/*<Dropzone ref="dropzone" style={{display: "inline-block", height: "100%"}} onDrop={this.onDrop} >
                    <div>Drop files here to build a set list</div>
                </Dropzone>*/}
                <div id="drop_zone" onDrop={(event) => this.handleDrop(event)} >Drop Files
                    <input type="file" onChange={(event, files) => this.SelectAudio(files)} />
                </div>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state){
    return {
        playlist: state.playlistReducer.playlist,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectSong: selectSong, handleSongUpload: handleSongUpload}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FileReader);