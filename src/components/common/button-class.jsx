import React, { Component } from "react";
import "./button.css";

export class ButtonClass extends Component {
  render() {
    // const isActive = this.props.isActive;
    // const children = this.props.children;
    // const label = this.props.label;

    // let colorClassName = "";
    // if (isActive === true) {
    //   colorClassName = "active";
    // }

    const { isActive, children, label } = this.props; // object desctructor, pattern matching
    const colorClassName = isActive ? "active" : ""; // ternary

    return (
      <div className={colorClassName}>
        From {label}: {children}
      </div>
    );
  }
}

export class MyButton extends Component {
  render() {
    return (
      <div>
        <p>My Class</p>
      </div>
    );
  }
}
