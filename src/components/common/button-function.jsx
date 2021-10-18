import React from "react";

export default function ButtonFunction(props) {
  const { isActive, children, label } = props; // object desctructor, pattern matching
  const colorClassName = isActive ? "active" : ""; // ternary

  return (
    <div className={colorClassName}>
      From {label}: {children}
    </div>
  );
}
