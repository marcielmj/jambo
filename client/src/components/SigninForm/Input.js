import React from "react";
import "./style.css";
import { MdVisibility } from "react-icons/lib/md";

const Input = props => {
  let iconVisibility = null;

  if (props.type == "password") {
    iconVisibility = <MdVisibility className="iconVisibility" />;
  }

  return (
    <div className="Input">
      <input
        id={props.name}
        onChange={value => props.onChange(value)}
        autoComplete="false"
        required
        type={props.type}
        placeholder={props.placeholder}
      />
      {iconVisibility}
    </div>
  );
};

export default Input;
