import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'AIzaSyAQvNFc6ulIgwEv592xp9Ws6SAsHyQHl-o';

import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

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
        // float: 'right',
        marginLeft: '15px',
        marginBottom: '15px',
        display: 'inline-block'
    },
    load: {
        // float: 'right',
        backgroundColor: '#1f1f1f',
        fontSize: 12,
       // marginLeft: "15%",
        // marginLeft: 5,
        // zIndex: 30
    },
    results: {
                width: '100%',
                /*height: 309px;*/
                maxHeight: 250,
                /*position: absolute;*/
                // top: 20,
                color: '#44def6',
                backgroundColor: 'black',
                overflow: 'auto',
                margin: 'auto',
                border: '5px solid #1f1f1f',
                // paddingBottom: 20,
                /*z-index: 500;*/
            }
}


// Create a new component. This component should produce html
class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            videoData: [],
            open: false,
            searchText: '',
        };

        //this.videoSearch('EDM');
this.handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };


    }

      handleNewRequest() {
        //   return;
    this.setState({
      searchText: '',
    });
  }


    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {

                   const dataArray = []
                    for (let i=0; i < videos.length; i++) {
                        let newVid = {
                        text: videos[i].snippet.title,
                        value: (
                        <MenuItem
                            //disabled={true}
                            primaryText={
                                <li className="list-group-item col-lg-3 col-md-3">
                                <div className="video-list media">
                                    <div className="media-left">
                                        <img className="media-object" src={videos[i].snippet.thumbnails.default.url}/>
                                    </div>
                                    <div className="media-body">
                                        <p className="media-heading">{videos[i].snippet.title}</p>
                                    </div>
                                    <div style={styles.loadBtnGroup}>
                                        <button style={styles.load} onTouchTap={() => this.props.selectSong(
                                            {title:videos[i].snippet.title,
                                            url: `https://www.youtube.com/embed/${videos[i].id.videoId}`,
                                            cover: videos[i].snippet.thumbnails.default.url
                                            },
                                            '_DECK1')}
                                            >
                                            LOAD TO DECK 1
                                        </button>
                                        <button style={styles.load} onTouchTap={() => this.props.selectSong(
                                            {title:videos[i].snippet.title,
                                            url: `https://www.youtube.com/embed/${videos[i].id.videoId}`,
                                            cover: videos[i].snippet.thumbnails.default.url
                                            },
                                            '_DECK2')}
                                            >
                                            LOAD TO DECK 2
                                        </button>
                                    </div>
                                </div>
                                </li>
                            }
                            //secondaryText="&#9786;"
                        />),
                        url: `https://www.youtube.com/embed/${videos[i].id.videoId}`
                                            }
                                            dataArray.push(newVid);
                                        }

            this.setState({
                videos: videos,
                selectedVideo: videos[0],
                videoData: dataArray,
            });
            console.log(videos);
        });
    }


    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);


        return (
        <div className="row">
            {/*<div className="col-xs-12" style={{margin: "auto", display: "block"}}>*/}
            <AutoComplete
                className="search"
                style={{marginLeft: "30%", width: "40%"}}
                textFieldStyle={{padding: '3%', width: '100%'}}
                underlineStyle={{width: '94%'}}
                listStyle={styles.results}
                popoverProps={{useLayerForClickAway: false, open: true}}
                hintText="Search YouTube To Get Started!"
                searchText={this.state.searchText}
                onUpdateInput={videoSearch}
                onNewRequest={this.handleNewRequest}
                dataSource={this.state.videoData}
                dataSourceConfig={{text: 'text', value: 'value'}}
                filter={AutoComplete.caseInsensitiveFilter}
                fullWidth={true}
                //filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
                openOnFocus={true}
            />
            {/*</div>*/}
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



export default connect(mapStateToProps, mapDispatchToProps)(Search);




