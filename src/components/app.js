import React, { Component } from 'react';

import SearchBar from '../containers/search-bar';
import WeatherGrid from '../containers/weather-grid';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherGrid />
      </div>
    );
  }
}
