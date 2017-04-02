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
    const audioContext = new AudioContext();
    return (
      <div>
        <div className="row">
          <Header />
        </div>
        {/*<NewMeter audioContext={audioContext} />*/}
        <IntroModal />
        <Table audioContext={audioContext} />
     </div>
    );
  }
}

export default App;
