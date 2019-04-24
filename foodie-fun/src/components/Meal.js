import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

import { deleteMeal } from '../actions';


const Meal = (props) => {

  const { meal, deleteMeal } = props;

  const clickHandler = () => {
    deleteMeal(meal.id)
    props.history.push('/protected')
  }


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
        <p>{meal.date_visited}</p>
        <NavLink to='/update-meal'>Update this meal</NavLink>
        <button onClick={clickHandler}>Delete meal</button>
      </div>

    </div>
  )
}

const mapStateToProps = () => {
  return {}
};

export default connect(mapStateToProps, { deleteMeal })(withRouter(Meal));

