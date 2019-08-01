import React from "react";
import Navbar from "../navbar/navbar.js";
import { Jumbotron} from "react-bootstrap";
import "./style.css";

let Title = () => {
  return (
    <Jumbotron className = "title">
      <h1>Welcome to China</h1>
      <p>
        China is a country in East Asia. With a population of over 1.4 Billion people, it is the most populous country on Earth. 
      </p>
      <p>
        With an area of over 3.7 million square miles, China is the 3rd largest country in the world.
      </p> 
      <p>
        <Navbar />
      </p>
    </Jumbotron>
  );
};

export default Title;
