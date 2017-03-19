import React, { Component } from 'react';
import VideoListItem from './video-list-item.component';
import classnames from 'classnames';



class VideoList extends React.Component {
    constructor(props) {
        super(props)
    }
    //const VideoList = (props) => {
        render() {

    // const listClass = classnames({hide: this.props.search})

    const videoItems = this.props.videos.map((video) => {
        return (
        <VideoListItem
            onVideoSelect={this.props.onVideoSelect}
            key={video.etag}
            video={video} />
        )
    });

    return (
        <ul className="col-lg-9 col-lg-offset-3 col-md-9 col-md-offset-3 video-list list-group">
            { videoItems }
        </ul>
    );
};

}


export default VideoList;