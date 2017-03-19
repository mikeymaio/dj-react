import React, { Component } from 'react';

import VideoList from './video-list.component';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

// const items = [];
// for (let i = 0; i < 100; i++ ) {
//   items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
// }



class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            value: 1,
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

   handleChange(event, index, value) {this.setState({value})};

    onInputChange( term ) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
    render() {
        return (
            <div className="search-bar col-lg-8 col-lg-offsset-2 col-md-8 col-md-offsset-2 col-sm-8 col-sm-offsset-2 col-xs-8 col-xs-offset-2">
                 <DropDownMenu  autoWidth={false} style={{width: "80%"}} maxHeight={300} value={"Hello"} onChange={this.handleChange}>
                     {/*<MenuItem value={1} label="Search YouTube" primaryText="Search YouTube" />*/}
                     <input
                     style={{width: "80%"}}
                    value={this.state.term}
                    placeholder="Search Songs On Youtube"
                    onChange={event => this.onInputChange(event.target.value)} />
        {<VideoList videos={this.props.videos} />}
      </DropDownMenu>
                {/*<input
                    value={this.state.term}
                    placeholder="enter a search term"
                    onChange={event => this.onInputChange(event.target.value)} />*/}
                    {/*<div id="results" videos={this.props.videos}>
                    <ul videos={this.props.videos}>
                        <VideoList
                videos={this.props.videos}
                />
                    </ul>
                    </div>*/}
                    {/*<VideoList className="hide" style={{display: "none"}}
                videos={this.props.videos}
                />*/}
                {/*<button className="search-submit">&#128269;</button>*/}
                
            </div>
        );
    };
}

export default SearchBar;