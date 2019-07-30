import React from "react";
import Navbar from "../navbar/navbar.js";
import { Jumbotron} from "react-bootstrap";
import "./style.css";

let Title = () => {
  return (
    <Jumbotron className = "title">
      <h1>Welcome to China</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Navbar />
      </p>
    </Jumbotron>
  );
};

export default Title;
