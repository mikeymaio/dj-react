import React from 'react';
import Slider from 'material-ui/Slider';
import Pot from './knob.component'



class Crossfader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
           <div className="crossfader col-lg-12 col-md-12 col-sm-12">

                <Slider id="range" defaultValue={0} min={-1} max={1} step={1} value={0} onChange={this.props.onChange} axis='x' />

                {/*<Pot
                title="X-Fade"
                defaultValue={this.props.defaultValue}
                value={this.props.value}
                onChange={this.props.onChange}
                min={-1}
                max={1}
                angleOffset={180}
                angleArc={180}
                />*/}
            </div>

        );
    };
}

export default Crossfader;