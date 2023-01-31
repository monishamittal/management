import React from 'react'
import "../styles/navbar.css"

const Navbar = () => {
  // state={clicked:false};
    return (
        <div>
            <nav>
         <div className='logo'>
           Event Management
         </div>
         <input type="checkbox" id="click"/>
         <label for="click" className='menu-btn'>
         <i className='fas fa-bars'></i>
         </label>
         <ul>
            <li><a className='active' href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <button>Login</button>
         </ul>
      </nav>
        </div>
    )
}

export default Navbar