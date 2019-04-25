import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateMeal } from '../actions';

export class UpdateMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: localStorage.getItem('mealId'),
      item_comment: localStorage.getItem('comment'),
      item_name: localStorage.getItem('itemName')
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
      .then(() => localStorage.removeItem('mealId'))
      .then(() => localStorage.removeItem('comment'))
      .then(() => localStorage.removeItem('itemName'))
    this.setState({
      id: '',
      item_comment: '',
      item_name: ''
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='form-wrap'>
          <form className='input-form' onSubmit={this.updateMeal}>
            <input
              type='text'
              name='item_name'
              value={this.state.item_name}
              placeholder='Item name'
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='item_comment'
              value={this.state.item_comment}
              placeholder='Comment'
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