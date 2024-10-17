import React, { Component } from "react";

const NotificationText = ({ text }) => (
  <div className="notification-text">{text || "No notifications"}</div>
);

class App extends Component {
  state = {
    show: true,
  };
  toggle = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div className="notification-widget">
        <div className="toggle-btn" onClick={this.toggle}>
          N
        </div>
        {this.state.show ? <NotificationText text={this.props.text} /> : null}
      </div>
    );
  }
}

export default App;
