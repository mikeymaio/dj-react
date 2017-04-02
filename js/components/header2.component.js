import React from 'react';
import AppBar from 'material-ui/AppBar';

import Search from './search.component';
import RaisedButton from 'material-ui/RaisedButton';



const style = {
    backgroundColor: '#000',
    //lineHeight: 50,
    width: '100%',
    flexWrap: 'wrap',
}

const titleStyle = {
    color: '#22bcd4',
    fontSize: 40,
    textAlign: 'center',


    // marginRight: 0,
}

const Header2 = () => (
  <AppBar
  className="header"
    style={style}
    titleStyle={titleStyle}
    //iconClassNameRight="muidocs-icon-navigation-expand-more"
    //iconStyleLeft={{display: "none"}}
    showMenuIconButton={true}
    iconElementLeft={<h3 style={{fontFamily: 'Revalia'}} >DJ React</h3>}
    iconStyleLeft={{marginTop: 18, marginLeft: 24, color: "#22bcd4"}}
    //iconClassNameLeft="logo"
    iconElementRight={<a href="https://soundcloud.com"><img id="sc-logo" style={{height: 65, width: 70}} src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.edmnations.com%2Fwp-content%2Fuploads%2F2016%2F02%2FSoundcloud_Logo1.jpg&f=1"/></a>}
    iconStyleRight={{marginTop: 3, marginRight: 24,}}
    //iconClassNameRight="sc-logo"
    >
    {/*title={*/}
      {/*<div>*/}
      <Search
        className="search"
        id="search"
        //style={{marginTop: '10px', marginLeft: 0, float: "left"}}
        style={{marginLeft: '25%', width: "100%", minWidth: 200, display: "block"}}
        //textFieldStyle={{padding: '3%', width: '100%'}}
        underlineStyle={{width: '100%'}}
        popoverProps={{useLayerForClickAway: false}}
        hintText="Search Songs On SoundCloud!"
      />
      {/*</div>*/}
    //}

  </AppBar>
);


export default Header2;