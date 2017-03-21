import React from 'react';
import AppBar from 'material-ui/AppBar';

const style = {
    backgroundColor: '#1f1f1f'
}

const titleStyle = {
    color: '#22bcd4',
    fontSize: 40,
    textAlign: 'center',
    //marginRight: 65,
}

const Header = () => (
  <AppBar
    title="DJ-React"
    className="header"
    style={style}
    titleStyle={titleStyle}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default Header;