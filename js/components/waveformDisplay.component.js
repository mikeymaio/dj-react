import React from 'react';

class WaveDisplay extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidUpdate() {
        // AUDIO CONTEXT

if (!AudioContext) alert('This site cannot be run in your Browser. Try a recent Chrome or Firefox. ');

var audioContext = this.props.audioContext;
var currentBuffer  = null;

// CANVAS
var canvasWidth = 256,  canvasHeight = 80 ;
// var newCanvas   = createCanvas (canvasWidth, canvasHeight);
var context     = null;

// window.onload = appendCanvas;
// function appendCanvas() { document.body.appendChild(newCanvas);
//                           context = newCanvas.getContext('2d'); }

// MUSIC LOADER + DECODE
function loadMusic(url) {
    var req = new XMLHttpRequest();
    req.open( "GET", url, true );
    req.responseType = "arraybuffer";
    req.onreadystatechange = function (e) {
          if (req.readyState == 4) {
             if(req.status == 200)
                  audioContext.decodeAudioData(req.response,
                    function(buffer) {
                             currentBuffer = buffer;
                             displayBuffer(buffer);
                    }, onDecodeError);
             else
                  alert('error during the load.Wrong url or cross origin issue');
          }
    } ;
    req.send();
}

function onDecodeError() {  alert('error while decoding your file.');  }

// MUSIC DISPLAY
function displayBuffer(buff /* is an AudioBuffer */) {
    // document.body.appendChild(newCanvas);
    //context = newCanvas.getContext('2d');
    // context = this.refs.canvas.getDOMNode().getContext('2d');
    context = document.getElementById('canvas').getContext('2d');
   var leftChannel = buff.getChannelData(0); // Float32Array describing left channel
   var lineOpacity = canvasWidth / leftChannel.length;
   context.save();
   context.fillStyle = '#000' ;
   context.fillRect(0,0,canvasWidth,canvasHeight );
   context.strokeStyle = '#009ab2';
//    context.globalCompositeOperation = 'lighter';
   context.translate(0,canvasHeight / 2);
//    context.globalAlpha = 0.06 ; // lineOpacity ;
   for (var i=0; i<  leftChannel.length; i++) {
       // on which line do we get ?
       var x = Math.floor ( canvasWidth * i / leftChannel.length ) ;
       var y = leftChannel[i] * canvasHeight / 2 ;
       context.beginPath();
       context.moveTo( x  , 0 );
       context.lineTo( x+1, y );
       context.stroke();
   }
   context.restore();
   console.log('done');
}

function createCanvas ( w, h ) {
    var newCanvas = document.createElement('canvas');
    newCanvas.width  = w;     newCanvas.height = h;
    return newCanvas;
};


loadMusic(this.props.song.url);
    }

render() {
    return (
        <canvas
        id='canvas'
        className='waveDisplay'
        //className='waveDisplay'
        ref="canvas"
        width={256}
        height={80}
        />
    )
}

}

export default WaveDisplay;