import "./App.css";
import "./components/Counter";
import React from "react";

import users from "./users.json";

// COMPONENTS
import UserInfo from "./components/UserInfo";
import Counter from "./components/Counter.js";

// Class APP
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }

  render() {
    // On stock le résultat de la map du fichier Users pour l'utiliser plus tard
    const data = users.map((user) => {
      return (
        <UserInfo name={user.name} email={user.email} website={user.website} />
      );
    });

    // On affiche les components dans l'App
    return (
      <div>
        <div>
          <h1>Counter</h1>

          {/* On affiche le compteur avec les props increment et substract*/}
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

        {/* Div de liste des users en fonction du count */}
        <div>
          {/* On récupère la variable DATA et on sélectionne à l'intérieur le nombre d'Users en fonction du state */}
          <ul>{data.slice(0, this.state.count)}</ul>
        </div>
      </div>
    );
  }
}

export default App;
