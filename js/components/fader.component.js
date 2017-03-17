import React from 'react';

import Slider from 'material-ui/Slider';

const styles = {
  root: {
    display: 'flex',
    // height: 124,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 150
  },
  sliderOverRide: {
      marginTop: 3,
      marginBottom: 3,
  }
};

class Fader extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
           <div className="fader" >


                {/*<label for="range">
                    <input type="range" name="range" id="range" min="0" max="100" step="0.1" value={this.props.value} onChange={this.props.onChange} />
                </label>*/}

                <Slider id="range" sliderStyle={this.props.style} style={styles} defaultValue={this.props.defaultValue} min={this.props.min} max={this.props.max} value={this.props.value} onChange={this.props.onChange} axis={this.props.axis} />
            </div>

        );
    };
}

export default Fader;