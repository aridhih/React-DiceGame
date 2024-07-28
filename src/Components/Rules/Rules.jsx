import React from 'react'
import './Rules.css'
const Rules = () => {
  return (
    <div className="rules">
        <h3>How to play?</h3>
        <ul>
            <li>Select any number.</li>
            <li>Click on dice image to roll.</li>
            <li>If selected number is equal to dice number you will get same point as dice.</li>
            <li>If you get wrong guess then 1 point will be dedcuted.</li>
            
        </ul>
    </div>
  )
}

export default Rules