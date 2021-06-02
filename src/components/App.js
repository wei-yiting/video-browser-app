import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [] };

  onSearchSubmit = async (searchTerm) => {
    const res = await youtube.get("search", {
      params: {
        q: searchTerm,
      },
    });
    this.setState({ videos: res.data.items });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "15px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        video results: {this.state.videos.length}
      </div>
    );
  }
}

export default App;
