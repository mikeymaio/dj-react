import React, { Component } from 'react';

import Table from './table.component';
import Header from './header.component';
import IntroModal from './intro-modal.component';
import NewMeter from './new-meter.component';


class App extends Component {
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
