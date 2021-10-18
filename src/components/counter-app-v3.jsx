import React, { Component } from "react";
// Ada Duplikasi ketika envt handling.

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

  handleIncrement = (increment) => {
    // this.state.counter = this.state.counter + 1;
    const currentCounter = this.state.counter;
    // Untuk mentriger Update UI, agar menjalankan kembari
    // function Render
    this.setState({ counter: currentCounter + increment });
  };

  // Dirender UI kalian sudah terbentuk
  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        {/* 
          Kalau kita langsung panggil this.handleIncrement(1)
          bakal menyebabkan Stack Overflow, karena render mentriger update,
          dan update mentriger render.

          Solusinya: Bungkus dengan annonymous function
         */}
        {/* <button onClick={this.handleIncrement(1)}>Increment</button> */}
        <button onClick={() => this.handleIncrement(1)}>Increment</button>
        <button onClick={() => this.handleIncrement(-1)}>Decrement</button>
      </div>
    );
  }
}
