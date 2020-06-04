import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export class Navbar extends Component {
    render() {

 return(
  <div>
      <nav className="navstyle">
        <header>
    <div className="row">
      <div className="logo">
        <a href="index.html">NGO eXchange</a>
      </div>
      <div className="social-links">
        <ul>
          <li><NavLink to="/Contact"><i className="fa fa-facebook" /></NavLink></li>
          <li><a href target="_blank"><i className="fa fa-twitter" /></a></li>
          <li><a href target="_blank"><i className="fa fa-linkedin" /></a></li>
          <li><a href target="_blank"><i className="fa fa-mail-reply" /></a></li>
        </ul>
      </div>
    </div>
  </header>
  </nav>
  </div>
 )
 }
} 

export default Navbar;