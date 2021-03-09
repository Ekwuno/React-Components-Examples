import React from "react";
import Button from "./actionButton";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1> Hello, world </h1>
        <h2> it is {this.state.date.toLocaleTimeString()}</h2>
        <Button/>
      </div>
    );
  }
}

export default Clock;
