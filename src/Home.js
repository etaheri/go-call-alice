import React, { Component } from "react";
import "./App.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    // get data
    // fetch('URI')
    // .then(res)

    // parse to json

    // set to state

    const data = { hello: "world" };
    this.setState({
      data
    });
  }

  render() {
    const { data } = this.state;
    if (!data) return null;
    return (
      <div className="App">
        <p className="App-intro">Home</p>
        <p className="App-intro">{data.hello}</p>
      </div>
    );
  }
}

export default HomePage;
