import React from 'react';
import AppBar from 'material-ui/AppBar';
import Search from './search.component';

const style = {
    backgroundColor: '#000',
    lineHeight: 50,
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
    title={<Search 
        className="search"
        //style={{marginTop: '10px', marginLeft: 0, float: "left"}}
        style={{marginRight: 145, width: "50%"}}
        //textFieldStyle={{padding: '3%', width: '100%'}}
        underlineStyle={{width: '100%'}}
        popoverProps={{useLayerForClickAway: false, open: true}}
        hintText="Search YouTube To Get Started!"
      />}
    className="header"
    style={style}
    titleStyle={titleStyle}
    //iconClassNameRight="muidocs-icon-navigation-expand-more"
    //iconStyleLeft={{display: "none"}}
    showMenuIconButton={true}
    iconElementLeft={<h3>DJ React</h3>}
    iconStyleLeft={{marginTop: 18, marginLeft: 24, color: "#22bcd4"}}

  />
);

export default Header;