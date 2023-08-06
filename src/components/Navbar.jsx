import React from 'react'
import Navstyles from '../assets/css/Navbar.module.css'
import piston from "../assets/images/piston.png"
import phone from "../assets/images/phone-call.png"
import mail from "../assets/images/email.png"
// import Booking from 'Booking'

function Navbar() {
  return (
    <div className={Navstyles.navbarinfo}>
      <div className={Navstyles.brandlogo}>
        <img src={piston} alt="" />
        <p>Diesel Care</p>
        </div>
      <div className={Navstyles.navitems}>
        <ul>
          <li>Home</li>
          <li>Book Service</li>
          <li>
            <img src={mail} alt="" />
            <a href="mailto:swamyassociates@myyahoo.com">Email Us</a>
            </li>
          <li>
            <img src={phone} alt="" />
            <a href="tel:+919843544970">Call Us</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
