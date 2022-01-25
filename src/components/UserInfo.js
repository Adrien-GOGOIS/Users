import React from "react";
import "./Counter.css";

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
