// var bitcrusher = require('bitcrusher');
import bitcrusher from 'bitcrusher';
import ReactPlayer from 'react-player';

var audioContext = window.createAudioContext();


var bitcrushNode = bitcrush(audioContext, {
    bitDepth: 6,
    frequency: 0.5
});

var mySource = <ReactPlayer className="player-cover" url='http://a.tumblr.com/tumblr_lpoc6cHNDP1r0jthjo1.mp3' playbackRate={this.props.speed} volume={this.props.volume} playing={true} hidden={false} width="50%" height="50%" />// ... create audio source

mySource.connect(bitcrushNode);
bitcrushNode.connect(audioContext.destination);