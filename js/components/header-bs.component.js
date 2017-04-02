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

const HeaderBs = () => (
  <div>
    <nav className="navbar navbar-default" style={{backgroundColor: "black", color: "#22bcd4"}}>
      <div className="container-fluid" style={{margin: "0, auto"}}>

    {/*<div className="navbar-header col-lg-3">*/}
      <h3 style={{color: "#22bcd4",fontFamily: 'Revalia', fontSize: "1.75rem", marginLeft: 24, lineHeight: "1.5"}} className="navbar-brand" href="#">DJ React</h3>
    {/*</div>*/}
<a className="pull-right" href="https://soundcloud.com"><img id="sc-logo" style={{height: 55, width: 60, float: "right"}} src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.edmnations.com%2Fwp-content%2Fuploads%2F2016%2F02%2FSoundcloud_Logo1.jpg&f=1"/></a>

      {/*<div className="navbar-form navbar-right">*/}
        {/*<label htmlFor="search"><a href="https://soundcloud.com"><img id="sc-logo" style={{height: 65, width: 70}} src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.edmnations.com%2Fwp-content%2Fuploads%2F2016%2F02%2FSoundcloud_Logo1.jpg&f=1"/></a></label>*/}
        <div className="col-lg-6 col-lg-offset-2 col-md-6 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
          <Search
        className="search"
        id="search"
        //style={{marginTop: '10px', marginLeft: 0, float: "left"}}
        style={{display: "inline-block", width: "65%", textAlign: "center"}}
        textFieldStyle={{padding: '3%', width: '100%'}}
        underlineStyle={{width: '100%'}}
        popoverProps={{useLayerForClickAway: false}}
        hintText="Search Songs On SoundCloud!"
      />
      </div>
      {/*</div>*/}

      {/*<div className="nav navbar-nav navbar-right">
        <a href="https://soundcloud.com"><img id="sc-logo" style={{height: 65, width: 70}} src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.edmnations.com%2Fwp-content%2Fuploads%2F2016%2F02%2FSoundcloud_Logo1.jpg&f=1"/></a>
      </div>*/}

  </div>
    </nav>
  </div>
);


export default HeaderBs;