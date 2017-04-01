import React from 'react';
import AppBar from 'material-ui/AppBar';

import Search from './search.component';
import RaisedButton from 'material-ui/RaisedButton';



const style = {
    backgroundColor: '#000',
    //lineHeight: 50,
    width: '100%',
}

const titleStyle = {
    color: '#22bcd4',
    fontSize: 40,
    textAlign: 'center',


    // marginRight: 0,
}

const Header = () => (
  <AppBar
    title={
      <div>
      <Search
        className="search"
        id="search"
        //style={{marginTop: '10px', marginLeft: 0, float: "left"}}
        style={{marginRight: 120, width: "40%", display: "inline-block"}}
        //textFieldStyle={{padding: '3%', width: '100%'}}
        underlineStyle={{width: '100%'}}
        popoverProps={{useLayerForClickAway: false}}
        hintText="Search Songs On SoundCloud!"
      /></div>}
    className="header"
    style={style}
    titleStyle={titleStyle}
    //iconClassNameRight="muidocs-icon-navigation-expand-more"
    //iconStyleLeft={{display: "none"}}
    showMenuIconButton={true}
    iconElementLeft={<h3 style={{fontFamily: 'Revalia'}} >DJ React</h3>}
    iconStyleLeft={{marginTop: 18, marginLeft: 24, color: "#22bcd4"}}
    iconElementRight={<a href="https://soundcloud.com"><img style={{height: 60, width: 60}} src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.edmnations.com%2Fwp-content%2Fuploads%2F2016%2F02%2FSoundcloud_Logo1.jpg&f=1"/></a>}
    iconStyleRight={{marginTop: 5, marginRight: 24,}}
  />
);


export default Header;