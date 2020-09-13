import React from 'react';
import "./App.css";
import NewComp from "./Components/NewComp";

class App extends React.Component {

  styles = {
    fontStyle: "bold",
    color: "dark",
  };

  render() {
    return (
      <div>
        <center><h1 style={this.styles}>Welcome to ReactJS States</h1></center>s
        <NewComp />
      </div>
    );
  }s
}

export default App;
