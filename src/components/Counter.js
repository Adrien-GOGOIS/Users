import React from "react";
import "./Counter.css";

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
//   render() {
//     return (
//       <div>
//         <h2>{this.props.count}</h2>
//         <button onClick={this.setState({ count: this.state.count - 1 })}>
//           -
//         </button>
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count + 1 });
//           }}
//         >
//           +
//         </button>
//       </div>
//     );
//   }
// }

export default Counter;
