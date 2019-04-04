import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./services/HttpInterceptor";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
