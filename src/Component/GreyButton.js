import React from 'react'
import './GreyButton.css'

const GreyButton = ({amount}) => {
  return (
    <div>
      <button className='greyBtn' type='button'>{amount}</button>
    </div>
  )
}

export default GreyButton
