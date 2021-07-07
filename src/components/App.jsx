import React from "react";
import Header from "./Header";
import Search from "./Search";

class App extends React.Component {
  state = { searchTerm: "", searchValue: "" };
  render() {
    return (
      <div>
        <Header />
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter search term here"
            value={this.state.searchTerm}
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
          />
          <button
            onClick={() =>
              this.setState({ searchValue: this.state.searchTerm })
            }
          >
            Search
          </button>
        </form>
        <Search searchValue={this.state.searchValue} />
      </div>
    );
  }
}

export default App;
