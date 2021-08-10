import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";


class Counter extends Component {
  state = {  
    count:0,

  };

  styles={

    fontSize:'15px',
    fontWeight: "Bold"
  }

  render() { 

   

    return (
    <div>
      
      <span style ={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>

    </div>
    );
    
  }

  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(){
    // obj deconstruction

    const {count}= this.state;

    return count===0?"Zero" : count;
  }
}
 
export default Counter;

