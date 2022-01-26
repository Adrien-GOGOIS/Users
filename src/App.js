import "./App.css";
import "./components/Counter";
import React from "react";

import users from "./users.json";

// COMPONENTS
import UserInfo from "./components/UserInfo";
import Counter from "./components/Counter.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }
  render() {
    const data = users.map((user) => {
      return (
        <UserInfo name={user.name} email={user.email} website={user.website} />
      );
    });
    return (
      <div>
        <div>
          <h1>Counter</h1>
          <Counter
            count={this.state.count}
            increment={() => {
              if (this.state.count < 10) {
                this.setState((prevState) => {
                  return { count: prevState.count + 1 };
                });
              }
            }}
            substract={() => {
              if (this.state.count > 1) {
                this.setState((prevState) => {
                  return { count: prevState.count - 1 };
                });
              }
            }}
          />
        </div>
        <div>
          <ul>{data.slice(0, this.state.count)}</ul>
        </div>
      </div>
    );
  }
}

export default App;
