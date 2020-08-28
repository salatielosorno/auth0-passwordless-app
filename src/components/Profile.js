import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getToken();
  }

  getToken = async () => {
    const { getAccessTokenSilently } = this.props.auth0;
    const token = await getAccessTokenSilently();
    this.setState({ token });
  };

  render() {
    // `this.props.auth0` has all the same properties as the `useAuth0` hook
    const { user } = this.props.auth0;
    return (
      <div>
        <p>Profile: {JSON.stringify(user)}</p>
        <p>Token: {this.state.token}</p>
      </div>
    );
  }
}

export default withAuth0(Profile);
