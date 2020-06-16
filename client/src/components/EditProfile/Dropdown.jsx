import React from "react";
import { Select, DropdownLabel } from "../Dashboard/Dashboard.styles";

const Dropdown = ({ handleChange, value }) => {
  return (
    <>
      <DropdownLabel htmlFor="gender">Please select your gender:</DropdownLabel>
      <Select id="gender" name="gender" value={value} onChange={handleChange}>
        <option value="">--Gender--</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </Select>
    </>
  );
};

export default Dropdown;
