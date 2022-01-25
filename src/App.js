import "./App.css";
import "./components/Counter.css";
import React from "react";

import users from "./users.json";

// COMPONENTS
import UserInfo from "./components/UserInfo";
import Counter from "./components/Counter.js";

const data = users.map((user) => {
  return (
    <UserInfo name={user.name} email={user.email} website={user.website} />
  );
});

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Counter</h1>
          <Counter increment="+" substract="-" />
        </div>
        <div>
          <ul>{data}</ul>
        </div>
      </div>
    );
  }
}

export default App;
