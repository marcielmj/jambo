import React from "react";
import "./style.css";
import { MdAccountCircle, MdAddCircle } from "react-icons/lib/md";

const Sign = props => {
  let icon = null;

  if (props.type == "signIn") {
    icon = <MdAccountCircle className="icons" />;
  } else {
    icon = <MdAddCircle className="icons" />;
  }

  return (
    <div
      onClick={props.onChange}
      className={props.type == "signIn" ? "signIn" : "signUp"}
    >
      <div className="center">
        {icon}
        <p>{props.type == "signIn" ? "SIGN IN" : "SIGN UP"}</p>
      </div>
    </div>
  );
};

export default Sign;
