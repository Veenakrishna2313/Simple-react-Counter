import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {
  state = { 
    counters:[
      {id:1, value:5},
      {id:2, value:0},
      {id:3, value:0},
      {id:4, value:0},

    ]
  }

  handleDelete=(counterId)=>{
    const counter= this.state.counters.filter((counters)=>counterId!==counters.id);
    console.log("New array is", counter);
    this.setState({counters:counter})
  }
   
  render() { 

  
    return (  
      <div>
        {this.state.counters.map((counter)=>
        <Counter key={counter.id} onDelete= {this.handleDelete} counter={counter}>
          
        </Counter>)}
      </div>
    );
  }
}
 
export default Counters;