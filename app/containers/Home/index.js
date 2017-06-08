/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Responsive from 'react-responsive';


export default class Home extends React.PureComponent {
  render() {
    const headerStyle={
     display:"flex",
     minHeight:"100vh",
     background:"url(http://h4z.it/Image/0d7aaa_sheldon-3228.jpg)",
     backgroundSize:"cover",
     width:"100%",
     flexDirection:"column",
     justifyContent:"center",
     alignItems:"center"
    }
    const navBar={
     display:"flex",
     flexDirection:"row",
     width:"100%",
     height:"100px",
     justifyContent:"space-between",
     position:"fixed",
     top:"0",
     background:"rgba(0,0,0,.5)",
    }
    const logo={
      width:"350px",
      height:"100px",
      marginTop:"20px",
      background:"url(http://h4z.it/Image/b49666_logo.png)",
      backgroundSize:""



    }
    const linkStyle={
      textDecoration:"0",
      display:"flex",
      flexDirection:"column",
      padding:"15px",
      alignItems:"space-between",
      color:"#000000",
      fontSize:"18px",
      fontFamily:"Roboto, sans serif",
      color:"#ffffff"

    }
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

      <Responsive minDeviceWidth={1024}>
      <div style={headerStyle}>
        <div style={navBar}>
        <div style={logo}></div>
        <Link to="/Web Design" style={linkStyle}>Web Design</Link>
        <Link to="/Photos" style={linkStyle}>Photos</Link>
        <Link to="/About" style={linkStyle}>About</Link>
        <Link to="/Contact" style={linkStyle}>Contact</Link>
      </div>
        </div>
      </Responsive>
      </div>

    );
  }
}
