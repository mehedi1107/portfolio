import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'


const Contact = () => {


  return (
    <form id='from'>
      <h2>Contact <span id='front'>Me</span></h2>
      <div id='from2'>

        <div id='input-box'>
          <input type='text' placeholder='Full Name' name='name'></input>
          <input type='email' placeholder='Email Address' name='email'></input>
        </div>
        <div id='input-box'>
          <input type='number' placeholder='Contact Number' name='Contact Number'></input>
          <input type='text' placeholder='Email Subject' name='Subject'></input>
        </div>
        <textarea name='Message' id='textarea' cols='30' rows='10' placeholder='Your Message' ></textarea>
        <input type='Submit' value='Send Message' id='btn'></input>
      </div>
    </form>
  )
}

export default Contact
