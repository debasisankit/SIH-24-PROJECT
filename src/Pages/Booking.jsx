import React from 'react'
import './Booking.css'

const Booking = () => {
  return (
    <div>
      <form className='place-order'>
      <div className="place-left">
        <p className='title'>Booking hear!</p>
        <div className="multi-field">
          <input type="text"  placeholder='First Name' />
          <input type="text"  placeholder='Last Name' />
        </div>
        <input type="text"  placeholder='Email address' />
        <input type="text"  placeholder='Street' />
      
      <div className="multi-field">
          <input type="text"  placeholder='city' />
          <input type="text"  placeholder='State' />
        </div>
        <div className="multi-field">
          <input type="text"  placeholder='Zip code' />
          <input type="text"  placeholder='Country ' />
        </div>
        <input type="text" placeholder='Phone' />
        <button>Submit</button>
        </div>
        <div className="place-right">
            <img src="https://thumbs.dreamstime.com/b/explorer-jungle-binoculars-expert-looking-away-47546059.jpg" alt="" />
        </div>
    

    </form>
    </div>
  )
}

export default Booking
