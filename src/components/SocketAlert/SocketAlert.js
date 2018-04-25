import React, { Component } from "react";
import { Alert } from "reactstrap";
import moment from "moment";


class SocketAlert extends Component {
  constructor(props) {
    super(props);
    this.socketInit = new WebSocket("ws://localhost:8080");
    this.state = {
      uuid: "",
      power_plant: "",
      startTime: "",
      endTime: ""
    };
  }

  componentWillMount() {
    this.getSocketMessage();
  }

  componentWillUnmount() {
  }

  displaySocketAlert() {
    let style = {
      width: window.innerWidth > 1000 ? "50%" : "100%",
      position: "fixed",
      right: 0,
      top: window.innerHeight - 50 + "px"
    };
    return (
      <Alert style={style} color={this.props.type}>
        New outage from <b>{this.state.startTime}</b> to{" "}
        <b>{this.state.endTime}</b> at {this.state.power_plant}
      </Alert>
    );
  }

  setSocketAlert(message) {
    this.setState({
      uuid: message.uuid,
      power_plant: message.power_plant,
      startTime: moment(message.startTime).format("DD/MM/YYYY HH:mm:ss"),
      endTime: moment(message.endTime).format("DD/MM/YYYY HH:mm:ss")
    });
  }

  getSocketMessage() {
    this.socketInit.onmessage = event => {
      this.setSocketAlert(JSON.parse(event.data));
    };
  }

  render() {
    return <div> {this.displaySocketAlert()} </div>;
  }
}

export default SocketAlert;
