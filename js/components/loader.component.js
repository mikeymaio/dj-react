import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class Loader extends React.Component {
    render() {
        return (
//const Loader = () => (
  <div className={this.props.className}>
    <CircularProgress size={this.props.size} thickness={5} color="#009ab2" style={{marginTop: 20}} />
  </div>
)
    }
}

export default Loader