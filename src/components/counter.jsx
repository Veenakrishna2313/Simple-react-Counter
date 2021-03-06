import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";


class Counter extends Component {
  

  styles={

    fontSize:'15px',
    fontWeight: "Bold"
  }

 
  render() { 

      console.log('props',this.props);
   
 
    return (
    <div className="row">
      <div className="col-1">
        <span style ={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
      </div>
      <div className="col">
        <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm ">+</button>
       <button  disabled={this.props.counter.value===0?"disabled": ""} onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">-</button>
       <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">x</button>
</div>
      
  
      
      
      

    </div>
    );
    
  }

  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(){
    // obj deconstruction

    const {value}= this.props.counter;

    return value===0?"Zero" : value;
  }
}
 
export default Counter;

