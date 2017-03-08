
import React from 'react';
import Knob from 'react-canvas-knob';

const style = {
    p: {
        color: '#009ab2',
        marginBottom: 0.5
    },
}

class Pot extends React.Component {

  render() {
    return (
        <div>
            <p style={style.p}>{this.props.title}</p>
      <Knob
        value={this.props.value}
        onChange={this.props.onChange}
        min={this.props.min}
        max={this.props.max}
        angleOffset={this.props.angleOffset}
        angleArc={this.props.angleArc}
        disableTextInput={true}
        fgColor="#00bcd4"
        width={40}
        height={40}
        style={this.props.style}
        />
        </div>
    );
  }
}

export default Pot;