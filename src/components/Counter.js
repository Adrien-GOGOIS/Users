import React from "react";
import "./Counter.css";

// Component du compteur
class Counter extends React.Component {
  render() {
    return (
      <div className="container">
        <button onClick={this.props.substract}>-</button>
        <h2>{this.props.count}</h2>
        <button onClick={this.props.increment}>+</button>
      </div>
    );
  }
}

// On retourne 2 boutons contenant un évènement onClick détaillé dans le fichier parent App.js

export default Counter;
