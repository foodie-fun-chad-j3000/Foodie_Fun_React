import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import uuidv4 from 'uuid'

import { getMeals } from '../actions';
import Meal from './Meal';

export class MyMeals extends Component {

  componentDidMount() {
    this.props.getMeals()
  }

  render() {
    console.log('meals: ', this.props.meals)
    return (
      <div className='wrapper'>
        <div className='meals-list'>
          {this.props.loading ? <h2>Loading...</h2> : null}

          <h1>My Meals</h1>

          <NavLink to='/add-meal'>Add a meal</NavLink>
          <div className='meal-section'>
            {this.props.meals.map(meal =>
              <Meal meal={meal} key={uuidv4()} />
            )}
          </div>

        </div>

      </div>
    )
  }
}

const mapStateToProps = ({ meals, loading }) => ({
  meals,
  loading
})

export default withRouter(
  connect(mapStateToProps, { getMeals })(MyMeals));

