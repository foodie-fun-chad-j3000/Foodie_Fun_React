import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import uuidv4 from 'uuid';
import Fuse from 'fuse.js';

import { getMeals } from '../actions';
import Meal from './Meal';

export class MyMeals extends Component {

  componentDidMount() {
    this.props.getMeals()
  }

  searchHandler = e => {
    let options = {
      threshold: 0.8,
      location: 0,
      distance: 10,
      keys: [
        'restaurant_name',
        'restaurant_type',
        'item_name',
        'item_comment',
        'date_visited'
      ]
    }
    let fuse = new Fuse(this.props.meals, options);
    this.setState({ filteredMeals: fuse.search(e.target.value) })
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='meals-list'>
          {this.props.loading ? <h2>Loading...</h2> : null}

          <h1>My Meals</h1>

          <form className='search-form'>
            <input
              className='search-input'
              type='text'
              placeholder='Search'
              onKeyDown={this.searchHandler}
            />
          </form>

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

