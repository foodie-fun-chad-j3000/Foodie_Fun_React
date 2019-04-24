import React from 'react'

function Detail(props) {
  return (
    <div>

      <p>{props.meal.item_comment}</p>

      <p>{props.meal.date_visited}</p>

    </div>
  )
}

export default Detail
