import React from 'react'
import './RoundButton.css'

const RoundButton = ({time}) => {
  return (
    <div>
      <button className='round-btn' type='button'>{time}</button>
    </div>
  )
}

export default RoundButton
