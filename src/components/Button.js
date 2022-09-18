import React from 'react'
import './Button.css'

function Button() {
  return (
    <div className='btn'>
        <button type='button'>Next</button>
        <a href='https://google.com' className='cancel-payment' alt='cancel_payment'>Cancel Payment</a>
    </div>
  )
}

export default Button