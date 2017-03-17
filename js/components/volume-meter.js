'use strict'

import { connect } from 'react-redux'
import VolumeMeterComponent from 'react-volume-meter'

const mapStateToProps = (state, ownProps) => {
//   const playing = state.decksReducer[ownProps.deckNum].play
const playing = state.decksReducer.deck1.play

//   var test = document.querySelector('#test');

var test = new Audio();

test.src = '/assets/test_playlist/James_Brown_vs_Led Zeppelin-Whole_Lotta_Sex_Machine.mp3';
test.autoplay = true;
test.crossOrigin = 'anonymous';
test.controls = true;

  return {
    src: playing ? ownProps.audioContext.createMediaElementSource(test) : undefined,
    //command: state.volumeMeter
  }
}

const VolumeMeter = connect(mapStateToProps)(VolumeMeterComponent)
export default VolumeMeter