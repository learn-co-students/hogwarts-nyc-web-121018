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
      <div className='card'>
        <div className='image'>
          <img src={this.props.image} onClick={this.handleClick} />
        </div>
        <div className='content'>
          <div className='header'>{this.props.hog.name}</div>
          <div className='meta'>
            <a>Hogwarts Hog</a>
          </div>
          <div className='description'>
            {this.state.showDetail ? <HogDetail hog={this.props.hog} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default HogCard;
