import React, { Component } from "react";
//
// 1. Kita HARUS init state di dalam constructor
// 2. Direkomendasikan menggunakan object sebagai state
// 3. Harus memperhatikan Component Lifecyle
// 4. Binding method yang kalian gunakan, dan harus di counstructor.
// 5. State itu imutable, engga boleh diupdate langsung. this.setState()
export default class CounterApp extends Component {
  constructor(props) {
    super(props);

    // immutable
    this.state = {
      counter: 0,
    };
  }

  handleIncrement = (inc) => {
    // this.state.counter = this.state.counter + 1;
    const currentCounter = this.state.counter;
    // Untuk mentriger Update UI, agar menjalankan kembari
    // function Render
    this.setState({ counter: currentCounter + inc });
  };

  // Dirender UI kalian sudah terbentuk
  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={() => this.handleIncrement(2)}>Increment</button>
        <button onClick={() => this.handleIncrement(-2)}>Decrement</button>
      </div>
    );
  }
}
