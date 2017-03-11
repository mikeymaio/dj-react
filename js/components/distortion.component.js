// import {PianoActions} from "../actions/PianoActions";
import React from "react";
import Fader from './fader.component';

class Distortion extends React.Component {
	render() {
		return (
             <div className="distortion-section col-lg-2 col-md-2 col-sm-2 col-xs-2" style={styles.fader}>
                        <label htmlFor="distortion">Distortion</label >
                        <Fader 
                        className="distortion"
                        value={this.props.distortion}
                        onChange={(event, value) => this.props.handleDistortionChange(value, this.props.deckNum)}
                        ref="distortion"
                        style={styles.root}/>
                    </div>


		);
	}
}

export default Distortion;