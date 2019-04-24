import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addMeal } from '../actions';

export class AddMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_name: '',
      restaurant_type: '',
      item_name: '',
      item_photo: '',
      item_comment: '',
      date_visited: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addMeal = e => {
    e.preventDefault();
    this.props.addMeal(this.state)
      .then(() => this.props.history.push('./protected'))
    this.setState({
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
          <form className='input-form' onSubmit={this.addMeal}>
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
            <button>Add a meal</button>

          </form>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    addingMeal: state.addingMeal
  }
}

export default connect(mapStateToProps, { addMeal: addMeal })(AddMeal)
