import React from 'react'
import '../Style/Contact.css'

function Contact() {
  return (
    <div className='contact' >
      <div className='contact-two'>
        <h1 style={{color:"black"}}>Contact us</h1>
        <form>


        <div>
          <label>Name</label>
          <input type='text' required placeholder='Abc'></input>
        </div>
        <div>
          <label>Email</label>
          <input type='email' required placeholder='Abc@xyz.com'></input>
        </div>
        <div>
          <label>Message</label>
          <input type='text' required placeholder='Tell us about your query..'></input>
        </div>
        <button>Send</button>
        </form>
        </div>      
     
    </div>
  )
}

export default Contact