import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import Fader from './fader.component';

// import { handleFilterChange } from '../actions/index.action';
// import { handleReverbChange } from '../actions/index.action';
// import { handleDelayChange } from '../actions/index.action';
// import { handleDistortionChange } from '../actions/index.action';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 90,
  },
  sliderOverRide: {
      marginTop: 3,
      marginBottom: 3,
  },
  fader: {
      marginLeft: 30,
      textAlign: 'center'
  },
  faderGroup :{
    background: 'black',
    height: '100%',
    width: '100%',
    padding: 5,
    paddingBottom: 20,
    marginLeft: '0'
  },
};




class FxContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div name={this.props.name} className="fx-container container-fluid col-lg-6 col-md-6 col-sm-12 col-xs-12" style={styles.faderGroup} >
                <div className="row">
                    {/*<div className="container-fluid col-lg-6 col-md-6 col-sm-6 col-xs-12">*/}
                    <div className="filter-section col-lg-2 col-md-2 col-sm-2 col-xs-2" style={styles.fader}>
                        <label className={styles.label} htmlFor="filter">Filter</label >
                        <Fader className="filter" value={this.props.filter} onChange={(event, value) => this.props.handleFilterChange(value, this.props.deckNum)} style={styles.root}/>
                    </div>
                    <div className="reverb-section col-lg-2 col-md-2 col-sm-2 col-xs-2" style={styles.fader}>
                        <label htmlFor="reverb">Reverb</label >
                        <Fader className="reverb" value={this.props.reverb} onChange={(event, value) => this.props.handleReverbChange(value, this.props.deckNum)} style={styles.root}/>
                    </div>
                    <div className="delay-section col-lg-2 col-md-2 col-sm-2 col-xs-2" style={styles.fader}>
                        <label htmlFor="delay">Delay</label >
                        <Fader className="delay" value={this.props.delay} onChange={(event, value) => this.props.handleDelayChange(value, this.props.deckNum)} style={styles.root}/>
                    </div>
                    <div className="distortion-section col-lg-2 col-md-2 col-sm-2 col-xs-2" style={styles.fader}>
                        <label htmlFor="distortion">Distortion</label >
                        <Fader className="distortion" value={this.props.distortion} onChange={(event, value) => this.props.handleDistortionChange(value, this.props.deckNum)} style={styles.root}/>
                    </div>
                    {/*</div>*/}
                 </div>
            </div>
        )
    }
}

//export default FxContainer

// function mapStateToProps(state) {
//     return {
//         filter: state.decksReducer.deck1.filter,
//         reverb: state.decksReducer.deck1.reverb,
//         delay: state.decksReducer.deck1.delay,
//         distortion: state.decksReducer.deck1.distortion,
//     };
// }


// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({handleFilterChange: handleFilterChange, handleReverbChange: handleReverbChange, handleDelayChange: handleDelayChange, handleDistortionChange: handleDistortionChange}, dispatch);
//}

export default FxContainer;
