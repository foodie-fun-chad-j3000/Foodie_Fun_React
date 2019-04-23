import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getMeals } from '../actions';
import Meal from './Meal';

export class MyMeals extends Component {

  componentDidMount() {
    this.props.getMeals()
  }

  render() {
    return (
      <div>
        {this.props.loading ? <h2>Loading...</h2> : null}
        <h1>My Meals</h1>
        {this.props.meals.map(meal =>
          <Meal meal={meal} key={meal.id} />
        )}


      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    meals: state.meals,
    error: state.error,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getMeals })(MyMeals);

