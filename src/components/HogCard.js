import React, { Component } from 'react';
import HogDetail from './HogDetail';

class HogCard extends Component {
  state = {
    showDetail: false
  };

  handleClick = () => {
    this.setState({
      showDetail: !this.state.showDetail
    });
  };
  // console.log(props);
  render() {
    return (
      <div>
        <h1>{this.props.hog.name}</h1>
        <img src={this.props.image} onClick={this.handleClick} />
        {this.state.showDetail ? <HogDetail hog={this.props.hog} /> : null}
      </div>
    );
  }
}

export default HogCard;
