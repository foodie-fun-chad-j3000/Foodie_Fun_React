import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { deleteMeal, getMeals } from '../actions';

const Meal = (props) => {

  const { meal, deleteMeal, getMeals } = props;

  const clickHandler = e => {
    e.preventDefault();
    deleteMeal(meal.id)
      .then(() => getMeals())
    props.history.push('/protected')
  }

  const updateHandler = () => {
    localStorage.setItem('mealId', `${meal.id}`)
    localStorage.setItem('itemName', `${meal.item_name}`)
    localStorage.setItem('comment', `${meal.item_comment}`)
    props.history.push('./update-meal')
  }

  const cdate = moment(meal.date_visited).format('ll')

  return (
    <div className='meal'>
      <div className='title'>
        <h2>{meal.restaurant_name}</h2>
        <p>{meal.restaurant_type}</p>
      </div>
      <div className='sub-title'>
        <p>{meal.item_name}</p>
        <img src={meal.item_photo} alt='' />
        <p><strong>Comment:</strong> {meal.item_comment}</p>
        <p>{cdate}</p>
        <button onClick={updateHandler}>Update the comment</button>
        <button onClick={clickHandler}>Delete meal</button>
      </div>

    </div>
  )
}

const mapStateToProps = () => {
  return {}
};

export default connect(mapStateToProps, { deleteMeal, getMeals })(withRouter(Meal));

