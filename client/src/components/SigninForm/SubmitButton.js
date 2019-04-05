import React from "react";
import "./style.css";
import { MdArrowForward } from "react-icons/lib/md";

const SubmitButton = props => {
  return (
    <div className={"submitButton"}>
      <button
        onClick={() => props.onClick()}
        className={props.type == "signIn" ? "submitSignIn" : "submitSignUp"}
      >
        <MdArrowForward />
      </button>
    </div>
  );
};

export default SubmitButton;
