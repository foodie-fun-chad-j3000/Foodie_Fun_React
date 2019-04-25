import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateMeal } from '../actions';

export class UpdateMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: localStorage.getItem('mealId'),
      restaurant_name: '',
      restaurant_type: '',
      item_name: '',
      item_photo: '',
      item_comment: '',
      date_visited: ''
    }
  }

  componentDidMount() {
    const { meals, match } = this.props
    const meal = meals.find(meal => meal.id === Number(match.params.id))
    this.setState(meal)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateMeal = e => {
    e.preventDefault();
    this.props.updateMeal(this.state)
      .then(() => this.props.history.push('./protected'))
    this.setState({
      id: '',
      restaurant_name: '',
      restaurant_type: '',
      item_name: '',
      item_photo: '',
      item_comment: '',
      date_visited: ''
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='form-wrap'>
          <form className='input-form' onSubmit={this.updateMeal}>
            <input
              type='text'
              name='restaurant_name'
              value={this.state.restaurant_name}
              placeholder='Restaurant name'
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='restaurant_type'
              value={this.state.restaurant_type}
              placeholder='Type of food'
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='item_name'
              value={this.state.item_name}
              placeholder='Menu item'
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='item_photo'
              value={this.state.item_photo}
              placeholder='Photo URL'
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='item_comment'
              value={this.state.item_comment}
              placeholder='Comment'
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='date_visited'
              value={this.state.date_visited}
              placeholder='Date visited'
              onChange={this.handleChange}
            />
            <button>Click to update</button>

          </form>

        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ meals, updatingMeal }) => ({
  meals,
  updatingMeal
})

export default connect(mapStateToProps, { updateMeal: updateMeal })(UpdateMeal)