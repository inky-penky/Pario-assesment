import React from 'react'
import Button from './Button'
import './PersonalInfo.css'

function PersonalInfo() {
  return (
    <div className='form-container'>
        <form className='form'>
            <label className='name'>Name</label>
            <input type='name' placeholder='Opara Linus Ahmed'></input>

            <label className='email'>Email Address<sup>*</sup></label>
            <input type='email' placeholder='OparaLinusAhmed@devmail.com' required></input>

            <label className='address'>Address 1</label>
            <input type='text'></input>

            <label className='address'>Address 2</label>
            <input type='text'></input>

            <div className='lga-state'>
              <span>
                <label className='Localgovernment'>Local Government</label>
                <input type='text' className='lga'></input>
              </span>

              <span>
                <label className='state-label'>State</label>
                <select type='option' className='state-input'></select>
              </span>
            </div>

            <Button />

        </form>
    </div>
  )
}

export default PersonalInfo