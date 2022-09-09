import React from 'react'
import './RoundNotColorBtn.css'

const RoundNotColorBtn = ({date}) => {
  return (
    <div>
      <button className='btnNotColor'>{date}</button>
    </div>
  )
}

export default RoundNotColorBtn
