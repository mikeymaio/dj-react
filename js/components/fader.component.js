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
    render() {
        return (
            <div className="fader col-lg-6 col-md-6 col-sm-6" style={this.props.style}>
                <Slider sliderStyle={styles.sliderOverRide} style={styles} defaultValue={this.props.defaultValue} min={0} max={1} value={this.props.value} onChange={this.props.onChange} axis='y' />
            </div>
        );
    };
}

export default Fader;