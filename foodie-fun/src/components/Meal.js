import React from 'react';
import { connect } from 'react-redux';
import { deleteMeal } from '../actions';

const Meal = ({ meal, deleteMeal }) => {

  const clickHandler = () => {
    deleteMeal(meal.id)
  }

  return (
    <div className='meal'>
      <div className='title'>
        <h2>{meal.restaurant_name}</h2>
        <p>{meal.restaurant_type}</p>
      </div>
      <div>
        <h3>{meal.item_name}</h3>
        <img src={meal.item_photo} alt='' />
        <p>{meal.food_rating}</p>
        <p>{meal.item_comment}</p>
        <p>{meal.wait_time}</p>
        <p>{meal.date_visited}</p>
        {/* <p>{meal.user_id}</p> */}
        <button onClick={clickHandler}>Delete meal</button>
      </div>



    </div>
  )
}

const mapStateToProps = () => {

};

export default connect(mapStateToProps, { deleteMeal })(Meal);

