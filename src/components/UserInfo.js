import React from "react";
import "./Counter.css";

// Structure de base de l'affichage des info Users dans le fichier parent App.js
class UserInfo extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <p>
              <span>Name : </span>
              {this.props.name}
            </p>
            <p>
              <span>Email : </span>
              {this.props.email}
            </p>
            <p>
              <span>Website : </span>
              {this.props.website}
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserInfo;
