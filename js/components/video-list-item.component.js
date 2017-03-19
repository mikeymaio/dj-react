import React from 'react';
import { connect } from 'react-redux';
import {selectSong} from '../actions/index.action';
import {handleSongUpload} from '../actions/index.action';
import {bindActionCreators} from 'redux';


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

class VideoListItem extends React.Component {
    constructor(props) {
        super(props)
    }
//const VideoListItem = ({video, onVideoSelect}) => {
    //console.log(video);
    render() {

           const upload = {
                url: `https://www.youtube.com/embed/${this.props.video.id.videoId}`,
                cover: this.props.video.snippet.thumbnails.default.url,
                title: this.props.video.snippet.title,
            }

    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item col-lg-6 col-md-6" 
        //onClick={ () => this.props.onVideoSelect(this.props.video) }
        >
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="meadia-heading">{this.props.video.snippet.title}</div>
                </div>
                <div style={styles.loadBtnGroup}>
                    <button style={styles.load} onTouchTap={() => this.props.selectSong(upload, '_DECK1')}>LOAD TO DECK 1</button>
                    <button style={styles.load} onTouchTap={() => this.props.selectSong(upload, '_DECK2')}>LOAD TO DECK 2</button>
                </div>
            </div>
        </li>
    );
    }
};

// export default VideoListItem;

function mapStateToProps(state){
    return {
        playlist: state.playlistReducer.playlist,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectSong: selectSong, handleSongUpload: handleSongUpload}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoListItem);