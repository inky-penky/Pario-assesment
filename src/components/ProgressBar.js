import React from 'react'
import './ProgressBar.css'

function ProgressBar() {
  return (
    <div className='container'>
        <h1 className='header'>Complete your Purchase</h1>
        <div className='progress-info'>
            <span className='personal-info'>Personal Info</span>
            <span className='billing-info'>Billing Info</span>
            <span className='payment-info'>Confirm Payment</span>
        </div>
        <div className='bar'><span className='progress'></span></div>
    </div>
  )
}

export default ProgressBar