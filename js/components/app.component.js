import React, { Component } from 'react';

import Table from './table.component';
import Header from './header.component';
import IntroModal from './intro-modal.component';
import NewMeter from './new-meter.component';


class App extends Component {
  componentDidMount() {
    console.log("Hello fellow dev! Why not fork the repo and send me a PR? There is much work to be done! https://github.com/HypeUFO/dj-react")
  }
  render() {
    const AudioContext = window.AudioContext || window.webkitAudioContext || false;

    if (AudioContext) {
      // Create an audio context
      const audioContext = new AudioContext();

      return (
        <div>
          <div className="row">
            <Header />
          </div>
          <IntroModal />
          <Table audioContext={audioContext} />
        </div>
      );
    } else {
      // Web Audio API is not supported
      // Alert the user
      alert("Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox");
    }
  }
}

export default App;
