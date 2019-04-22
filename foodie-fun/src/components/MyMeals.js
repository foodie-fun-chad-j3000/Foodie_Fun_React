import React, { Component } from 'react'

import Meal from './Meal';

export class MyMeals extends Component {
  render() {
    return (
      <div>
        <h1>My Restaurants</h1>
        <Meal />
      </div>
    )
  }
}

export default MyMeals;
