
import React from 'react';
import Knob from 'react-canvas-knob';

const style = {
    p: {
        color: '#009ab2',
        marginBottom: 0.5
    }
}

class Pot extends React.Component {
  constructor(props) {
    super(props);
  //   this.state = {value: 50};

  // this.handleChange = (newValue) => {
  //   this.setState({value: newValue});
  // }
  }
  render() {
    return (
        <div>
            <p style={style.p}>{this.props.title}</p>
      <Knob
        value={this.props.value}
        onChange={this.props.onChange}
        //disableTextInput={true}
        fgColor="#00bcd4"
        width={40}
        height={40} />
        </div>
    );
  }
}

// function mapStateToProps(state) {
//     return {
//     };
// }

export default Pot;