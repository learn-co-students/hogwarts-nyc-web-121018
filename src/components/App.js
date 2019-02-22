import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogContainer from './HogContainer';

class App extends Component {
  state = {
    hogs: hogs
  };

  greasedFilter = () => {
    console.log('hit');
    const filtered = [...this.state.hogs].filter(hog => hog.greased === true);
    this.setState(
      {
        hogs: filtered
      },
      () => console.log('filtered', this.state)
    );
  };

  sortByName = () => {
    const sortNames = [...this.state.hogs].sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.setState({
      hogs: sortNames
    });
  };

  sortByWeight = () => {
    const sortWeight = [...this.state.hogs].sort((a, b) => {
      if (
        a[
          'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
        ] >
        b[
          'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
        ]
      ) {
        return -1;
      }
      if (
        a[
          'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
        ] <
        b[
          'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
        ]
      ) {
        return 1;
      }
      return 0;
    });
    this.setState({
      hogs: sortWeight
    });
  };

  render() {
    return (
      <div className='App'>
        <Nav
          sortByWeight={this.sortByWeight}
          sortByName={this.sortByName}
          greased={this.greasedFilter}
        />
        <HogContainer allHogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
