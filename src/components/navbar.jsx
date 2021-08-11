import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css";



class Navbar extends Component {
  
  render() { 
    return ( 
<div className="container">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <span className="badge badge-pill badge-secondary ">{this.props.totalCounters}</span>
  </nav>
</div>
     );
  }
}
 
export default Navbar;