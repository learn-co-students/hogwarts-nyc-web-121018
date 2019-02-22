import React, { Component } from "react";
import HogCard from "./HogCard";
import Filter from "./Filter";

class HogContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: "all",
      pigGifs: []
    };
  }

  pigFilter = event => {
    this.setState({
      sort: event.target.value
    });
  };

  sortPigs = () => {
    const hogCards = this.props.hogs;
    let sortedHogs;

    if (this.state.sort === "all") {
      return hogCards.map(hog => {
        return <HogCard hog={hog} pigGifs={this.state.pigGifs} />;
      });
    } else if (this.state.sort === "name") {
      sortedHogs = hogCards.sort(function(a, b) {
        //JS Sort
        let nameA = a.name;
        let nameB = b.name;
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        }
        return 0; //default return value (no sorting)
      });
      return sortedHogs.map(hog => {
        return <HogCard hog={hog} />;
      });
    } else if (this.state.sort === "weight") {
      sortedHogs = hogCards.sort(function(a, b) {
        //JS Sort
        let weightA =
          a[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ];
        let weightB =
          b[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ];
        if (weightA < weightB) {
          return -1;
        } else if (weightA > weightB) {
          return 1;
        }
        return 0; //default return value (no sorting)
      });
      return sortedHogs.map(hog => {
        return <HogCard hog={hog} />;
      });
    } else if (this.state.sort === "greased") {
      sortedHogs = hogCards.sort(function(a, b) {
        //JS Sort
        let weightA = a.greased;
        let weightB = b.greased;
        if (weightA < weightB) {
          return -1;
        } else if (weightA > weightB) {
          return 1;
        }
        return 0; //default return value (no sorting)
      });
      return sortedHogs.map(hog => {
        return <HogCard hog={hog} />;
      });
    }
  };

  render() {
    return (
      <div>
        <Filter pigFilter={this.pigFilter} />
        <div>{this.sortPigs()}</div>
      </div>
    );
  }

  // componentDidMount() {
  //   fetch("https://api.tenor.com/v1/trending?")
  //     .then(resp => resp.json())
  //     .then(data => {
  //       this.setState({ pigGifs: data.results });
  //       console.log(this.state.pigGifs);
  //     });
  // }
}

export default HogContainer;
