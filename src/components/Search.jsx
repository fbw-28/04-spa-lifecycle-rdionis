import React, { Component } from "react";
import Table from "./Table";

export default class Search extends Component {
  state = {
    users: [],
    originalUsers: [],
    showTable: false,
  };

  fetchData = async () => {
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/users");
      let resultData = await data.json();
      this.setState({ users: resultData });
      this.setState({ originalUsers: resultData });
    } catch (error) {
      console.error(error);
    }
  };

  static getDerivedStateFromProps(props, state) {
    //because this is a static method, we don't use the "this" keyword
    if (props.searchValue !== "") {
      state.users = state.originalUsers.filter((user) =>
        user.name.toLowerCase().includes(props.searchValue.toLowerCase())
      );
      state.showTable = true;
    } else {
      state.users = state.originalUsers;
      state.showTable = false;
    }
    return state.users;
  }
  componentDidMount() {
    this.fetchData(); //this life cycle will run only once // it is just going to fetch the data once
  }

  render() {
    const userData = this.state.users.map((user) => (
      <Table key={user.id} id={user.id} name={user.name} email={user.email} /> //these are props which we are sending down to the table component
    ));
    //() works here because it is jsx ---> it is the same as putting in inside a return and {}, it is like a implicit return

    return (
      <div>
        {this.state.showTable ? (
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Username</th>
                <th>User Email</th>
              </tr>
            </thead>
            <tbody>{userData}</tbody>
          </table>
        ) : null}
      </div>
    );
  }
}
