import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './search-bar.component';
import VideoList from './video-list.component';
import VideoDetail from './video-detail.component';
import Turntable from './turntable2.component';
const API_KEY = 'AIzaSyAQvNFc6ulIgwEv592xp9Ws6SAsHyQHl-o';



// Create a new component. This component should produce html
export default class SearchTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            open: false
        };

        //this.videoSearch('EDM');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {

            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);


        return (
        <div className="col-md-12">
            <SearchBar onSearchTermChange={videoSearch} videos={this.state.videos}/>
            {/*<VideoDetail video={this.state.selectedVideo} />*/}
            {/*<VideoList
                videos={this.state.videos}
                //onVideoSelect={selectedVideo => {this.setState({selectedVideo}), console.log(selectedVideo)}} 
                />*/}
                {/*<Turntable
            deckNum="_DECK1"
            video={this.state.selectedVideo}
            //song={this.props.song}
            />*/}
            {/*play={this.props.play}
            speed={this.props.speed}
            volume={this.props.volume}
            handlePlaybackSpeed={this.props.handlePlaybackSpeed}
            startStopSong={this.props.startStopSong}
            className={turntableClass}/>*/}
        </div>
        );
    }
}




