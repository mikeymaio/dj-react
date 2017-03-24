import React, { Component } from 'react';

import Table from './table.component';
import Header from './header.component';
import HelpModal from './help-modal.component';

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
        <HelpModal />
     <Table audioContext={audioContext} />
     </div>
    );
  }
}


export default App;

