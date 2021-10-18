import React, { Component } from "react";
// Kita ingin menghilangkan proses binding
// SOLUSINYA: Kita menggunakan arrow function.

// 1. Kita HARUS init state di dalam constructor
// 2. Direkomendasikan menggunakan object sebagai state
// 3. Harus memperhatikan Component Lifecyle
// 4. State itu imutable, engga boleh diupdate langsung. this.setState()
export default class CounterApp extends Component {
  constructor(props) {
    super(props);

    // immutable
    this.state = {
      counter: 0,
    };
  }

  handleIncrement = () => {
    // this.state.counter = this.state.counter + 1;
    const currentCounter = this.state.counter;
    // Untuk mentriger Update UI, agar menjalankan kembari
    // function Render
    this.setState({ counter: currentCounter + 1 });
  };

  handleDecrement = () => {
    // this.state.counter = this.state.counter + 1;
    const currentCounter = this.state.counter;
    // Untuk mentriger Update UI, agar menjalankan kembari
    // function Render
    this.setState({ counter: currentCounter - 1 });
  };

  // Dirender UI kalian sudah terbentuk
  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export function CounterAppFunction() {
  const [state, updateState] = React.useState(0);

  const handleIncrement = (inc) => {
    updateState(state + inc);
  };

  return (
    <div>
      <p>Counter: {state}</p>
      <button onClick={() => handleIncrement(2)}>Increment</button>
      <button onClick={() => handleIncrement(-2)}>Decrement</button>
    </div>
  );
}
