import React, { Component } from 'react'

import Place from './Place';

export class MyPlaces extends Component {
  render() {
    return (
      <div>
        <h1>My Restaurants</h1>
        <Place />
      </div>
    )
  }
}

export default MyPlaces;
