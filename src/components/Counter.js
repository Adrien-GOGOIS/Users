import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <div className="container">
        <button
          onClick={() => {
            if (this.state.count > 1) {
              this.setState({ count: this.state.count - 1 });
            }
          }}
        >
          {this.props.substract}
        </button>
        <h2>{this.state.count}</h2>
        <button
          onClick={() => {
            if (this.state.count < 100) {
              this.setState({ count: this.state.count + 1 });
            }
          }}
        >
          {this.props.increment}
        </button>
      </div>
    );
  }
}

export default Counter;
