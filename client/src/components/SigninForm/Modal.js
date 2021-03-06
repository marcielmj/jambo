import React, { Component } from "react";
import "./style.css";
import Sign from "./Sign";
import SignExpanded from "./SignExpanded";
import SignCollapsed from "./SignCollapsed";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wasClickedLeft: false,
      wasClickedRight: false
    };
  }

  onReset = () => {
    this.setState({
      wasClickedLeft: false,
      wasClickedRight: false
    });
  };

  onClickLeft = () => {
    this.setState({ wasClickedLeft: !this.state.wasClickedLeft }, function() {
      if (
        this.state.wasClickedRight == true &&
        this.state.wasClickedLeft == true
      ) {
        this.setState({ wasClickedRight: false });
      }
    });
  };

  onClickRight = () => {
    this.setState({ wasClickedRight: !this.state.wasClickedRight }, function() {
      if (
        this.state.wasClickedRight == true &&
        this.state.wasClickedLeft == true
      ) {
        this.setState({ wasClickedLeft: false });
      }
    });
  };

  onSignup = user => {
    this.props.onSignup(user);
  };

  onSignin = user => {
    this.props.onSignin(user);
  };

  render() {
    let modalContent = null;

    if (
      this.state.wasClickedLeft == false &&
      this.state.wasClickedRight == false
    ) {
      modalContent = (
        <div className="Modal">
          <Sign type="signIn" onChange={this.onClickLeft} />
          <Sign type="signUp" onChange={this.onClickRight} />
        </div>
      );
    } else if (
      this.state.wasClickedLeft == false &&
      this.state.wasClickedRight == true
    ) {
      modalContent = (
        <div className="Modal">
          <SignCollapsed type="signIn" onChange={this.onClickLeft} />
          <SignExpanded onSubmit={user => this.onSignup(user)} type="signUp" />
        </div>
      );
    } else if (
      this.state.wasClickedLeft == true &&
      this.state.wasClickedRight == false
    ) {
      modalContent = (
        <div className="Modal">
          <SignExpanded onSubmit={user => this.onSignin(user)} type="signIn" />
          <SignCollapsed type="signUp" onChange={this.onClickRight} />
        </div>
      );
    }

    return <div className="Modal">{modalContent}</div>;
  }
}

export default Modal;
