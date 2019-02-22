import React, { Component } from "react";
import HogDetails from "./HogDetails";

class HogCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: "none",
      display: "Show",
      wrongPigs: []
    };
  }

  showDetails = () => {
    this.state.details === "none"
      ? this.setState({ details: "block" })
      : this.setState({ details: "none" });

    this.state.display === "Show"
      ? this.setState({ display: "Hide" })
      : this.setState({ display: "Show" });
  };

  formatName = () => {
    this.props.hog.name
      .toLowerCase()
      .split(" ")
      .join("_");
  };

  render() {
    const { name, specialty, greased } = this.props.hog;

    return (
      <div className="pigTile">
        <img
          src={process.env.PUBLIC_URL + "/hog-imgs/augustus_gloop.jpg"}
          alt="Piggy"
        />
        <h2> {name} </h2>
        <button onClick={this.showDetails}>
          {" "}
          {this.state.display} details!{" "}
        </button>
        <HogDetails hog={this.props.hog} details={this.state.details} />
      </div>
    );
  }

  // componentDidMount() {
  //   fetch(
  //     "https://api.giphy.com/v1/gifs/search?api_key=kkckxDBo1jkyvMcK0h3KwK1D9Xafk3K9&q=pig&limit=1&offset=0&rating=G&lang=en"
  //   )
  //     .then(resp => resp.json())
  //     .then(data => {
  //       this.setState({ wrongPigs: data.data[0].url });
  //       console.log(this.state.wrongPigs[0]);
  //     });
  // }
}

export default HogCard;
