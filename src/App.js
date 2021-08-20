import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState(counters);
    console.log("reset hit");
  };

  handleDelete = (counterId) => {
    const counter = this.state.counters.filter(
      (counters) => counterId !== counters.id
    );
    console.log("New array is", counter);
    this.setState({ counters: counter });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    return (
      <div className="App">
        <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}></Navbar>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            
          ></Counters>
        </main>
      </div>
    );
  }
}

export default App;
