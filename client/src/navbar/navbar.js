import React from "react";
import { Dropdown } from "react-bootstrap";
import "./navbar.css";

function Navbar() {
  return (
    <div className = "navbar">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">History of China</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Demographics and Culture</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Economy</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Science and Technology</Dropdown.Item>
          <Dropdown.Item href="#/action-5">Politics</Dropdown.Item>
          <Dropdown.Item href="#/action-6">Geography</Dropdown.Item>
          <Dropdown.Item href="#/action-7">Planning a trip?</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Navbar;
