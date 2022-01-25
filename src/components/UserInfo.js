import React from "react";

class UserInfo extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <p>Name : {this.props.name}</p>
            <p>Email : {this.props.email}</p>
            <p>Website : {this.props.website}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserInfo;
