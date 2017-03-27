import React, { Component } from 'react';

import Table from './table.component';
import Header from './header.component';
import IntroModal from './intro-modal.component';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




class App extends Component {
  render() {
    const audioContext = new AudioContext();
    // var audioContext2 = new AudioContext();
    return (
      <div>
      <div className="row">
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>
        </div>
        <IntroModal />
     <Table audioContext={audioContext} />
     </div>
    );
  }
}


export default App;

