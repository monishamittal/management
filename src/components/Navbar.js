import React from 'react'
import "../styles/navbar.css"

const Navbar = () => {
  // state={clicked:false};
    return (
        <div>
            <nav>
         <div class="logo">
            SuvisdhaBnk
         </div>
         <input type="checkbox" id="click"/>
         <label for="click" class="menu-btn">
         <i class="fas fa-bars"></i>
         </label>
         <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Partner With Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <button>login</button>
         </ul>
      </nav>
        </div>
    )
}

export default Navbar