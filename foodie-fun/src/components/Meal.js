import React from 'react'

const Meal = ({ meal }) => {
  return (
    <div className='meal'>
      <div className='title'>
        <h2>{meal.restaurant_name}</h2>
        <p>{meal.restaurant_type}</p>
      </div>
      <div>
        <h3>{meal.item_name}</h3>
        <img src={meal.item_photo} alt='meal' />
        <p>{meal.food_rating}</p>
        <p>{meal.item_comment}</p>
        <p>{meal.wait_time}</p>
        <p>{meal.date_visited}</p>
        <p>{meal.user_id}</p>
      </div>



    </div>
  )
}

export default Meal;

