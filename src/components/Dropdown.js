import React, { useState } from "react";
import '../styles/Style.css'

function Dropdown(props) {
   const [classes] = useState(props.classes);
//   const [selectedData, updateSelectedData] = useState("");

//   const handleChange = (e) => {
//     updateSelectedData(e.target.value);
//     if (props.onSelectChange) props.onSelectChange(selectedData);
//   }
  let options = classes.map(classes => (
    <option key={classes.id} value={classes.id}>
      {classes.name}
    </option>
  ));
  return (
      <div className="dropdown-classes">
        <label htmlFor={props.name}>{props.label}</label>
        <select
        name={props.name}
        className="class-item"
        //onChange={handleChange}
        >
        <option>Class</option>
        {options}
        </select>
      </div>
  );
}
export default Dropdown;