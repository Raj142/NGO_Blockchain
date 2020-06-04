import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
         <h2 style = {{color: 'white'}}> NGO - Non_PROFIT USING BLOCKCHAIN </h2>
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white"><span id="account">{this.props.account}</span></small>
          </li>
         
        </ul>
        <ul style ={{marginRight:"100px",color:"White"}}>
        <li ><i className="active" data-id="tab-about"/><Link to="/components/About"><h4 style={{color:"white", marginTop:"10px"}}>Log Out</h4></Link><span /></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
