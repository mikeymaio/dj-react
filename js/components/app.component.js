import React, { Component } from 'react';

import Table from './table.component';
import Header from './header.component';
import Header2 from './header2.component';
import HeaderBs from './header-bs.component';
import IntroModal from './intro-modal.component';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




class App extends Component {
  render() {
    const audioContext = new AudioContext();
    return (
      <div>
      <div className="row">
          {/*<Header />*/}
          {/*<Header2 />*/}
          <HeaderBs />
        </div>
        <IntroModal />
     <Table audioContext={audioContext} />
     </div>
    );
  }
}


export default App;

