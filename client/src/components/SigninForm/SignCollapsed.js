import React from "react";
import "./style.css";
import { MdAccountCircle, MdAddCircle } from "react-icons/lib/md";

const SignCollapsed = props => {
  let icon = null;

  if (props.type == "signIn") {
    icon = <MdAccountCircle className="iconsCollapsed" />;
  } else {
    icon = <MdAddCircle className="iconsCollapsed" />;
  }

  return (
    <div
      onClick={props.onChange}
      className={props.type == "signIn" ? "signInCollapsed" : "signUpCollapsed"}
    >
      {icon}
    </div>
  );
};

export default SignCollapsed;
