import React, { Component } from 'react';

import Table from './table.component';




class App extends Component {
  render() {
    const audioContext = new AudioContext();
    // var audioContext2 = new AudioContext();
    return (
     <Table audioContext={audioContext} />
    );
  }
}


export default App;

