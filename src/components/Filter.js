import React from "react";

function Filter(props) {
  return (
    <div>
      <select onChange={props.pigFilter}>
        <option value="all">Sorty by:</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
        <option value="greased">Greased</option>
      </select>
    </div>
  );
}

export default Filter;
