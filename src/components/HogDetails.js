import React, { Component } from "react";

class HogDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { specialty, greased } = this.props.hog;
    const weight = this.props.hog[
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    ];
    const medal = this.props.hog["highest medal achieved"];
    return (
      <div style={{ display: this.props.details }}>
        <p>Specialty: {specialty} </p>
        <p>Greased: {greased ? "true" : "false"} </p>
        <p>Weight: {weight}</p>
        <p>Highest medal: {medal}</p>
      </div>
    );
  }
}

export default HogDetails;
