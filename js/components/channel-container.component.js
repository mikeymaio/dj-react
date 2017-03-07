import React from 'react';

import Deck from '../deck/deck.component';
import Mixer from '../mixer/mixer.component';
import FX from '../fx/fx.component';
import Playlist from '../playlist/playlist.container';

class Channel extends React.Component {
    constructor(props) {
        super(props);



    }

    render() {
        return (
            <div className={this.props.className}>
                <Deck playlist={this.props.playlist} />
                <Playlist />
                <Mixer />
                <FX />
            </div>
        )
    }
}

export default Channel;