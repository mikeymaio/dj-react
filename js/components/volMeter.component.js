// // Polyfill: mediaDevices.
// // Not work on Desktop Safari, IE.
// // Not work on Mobile browsers.
// navigator.mediaDevices = function() {
//     if (navigator.mediaDevices) {
//         return navigator.mediaDevices;
//     }

//     navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
//     if (navigator.getUserMedia) {
//         return {
//             getUserMedia: function (c) {
//                 return new Promise(function(y, n) {
//                         navigator.getUserMedia.call(navigator, c, y, n);
//                     }
//                 );
//             }
//         }
//     }
// }();
// if (!navigator.mediaDevices) {
//     alert("mediaDevices() not supported.");
//     throw new Error("mediaDevices() not supported.")
// }

// Polyfill: AudioContext.
import React from 'react';


window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;

// var AudioMeter = React.createClass({

    class AudioMeter extends React.Component {
        constructor(props) {
            super(props)
        

    // getInitialState: function() {
    //     return {
    //         volume: 0,
    //         debug: false
    //     };
    // },

    setTimeout(
                
            
            function () {
        
                var audioCtx = new AudioContext();

                var deck = document.querySelector(':scope ._DECK1 audio');
                var source = audioCtx.createMediaElementSource(deck);

                // var source = audioCtx.createMediaStreamSource(stream);
                var processor = audioCtx.createScriptProcessor(256);

                this.averaging = 0.95;
                this.canvasCtx = document.getElementById('canvas').getContext('2d');
                //this.canvasCtx = this.refs.canvas.getContext('2d');
                this.canvasCtx.fillStyle = '#00FF48';

                processor.onaudioprocess = process;
                processor.connect(audioCtx.destination);
                source.connect(processor);

            }, 1000);
        };
        
    componentDidMount() { //: function () {

        // Processing.
        var process = function (event) {
            var buf = event.inputBuffer.getChannelData(0);
            var sum = 0;
            var x;

            for (var i = 0; i < buf.length; i++) {
                x = buf[i];
                sum += x * x;
            }

            var rms = Math.sqrt(sum / buf.length);
            this.setState({
                volume: Math.max(rms, this.state.volume * this.averaging)
            });
            //console.log('Volume: ' + this.state.volume);

            this.canvasCtx.clearRect(0, 0, this.canvasCtx.canvas.width, this.canvasCtx.canvas.height);
            this.canvasCtx.fillRect(0, this.canvasCtx.canvas.height * (1 - this.state.volume), this.canvasCtx.canvas.width, this.canvasCtx.canvas.height);

        }.bind(this);
    };

        // Init processing.
        // navigator.mediaDevices.getUserMedia(
        //     {
        //         audio: true
        //     }
        // ).then(
            
            // }.bind(this)
        // ).catch(function(err){
        //         console.log('Error occurred while initalizing audio input: ' +  err.toString());
        //     });
    // },

    // toggleDebug: function() {
    //     this.setState({
    //         debug: !this.state.debug
    //     });
    // },
    //     }
        
    render() {
        return (
            <div>
                <canvas ref="canvas" width="30" height="78"></canvas>
                <p></p>
                {/*<button onClick={this.toggleDebug}>Debug</button>
                { this.state.debug  ? <p>Volume: {this.state.volume} </p>: null}*/}
            </div>
        );
    }
}
//});

export default AudioMeter;