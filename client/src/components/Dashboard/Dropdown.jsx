import React from "react";
import * as sc from "./Dashboard.styles";

const Dropdown = (props) => {
  return (
    <>
      <sc.DropdownLabel htmlFor="dropdown">
        Please select your blood type:
      </sc.DropdownLabel>
      <sc.Select
        value={props.value}
        id="dropdown"
        name="bloodType"
        onChange={props.handleChange}
      >
        <option value="">--Blood type--</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </sc.Select>
    </>
  );
};

export default Dropdown;
