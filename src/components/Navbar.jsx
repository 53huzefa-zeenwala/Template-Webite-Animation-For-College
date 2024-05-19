import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
        <ul className=''>
            <li>Home</li>
            <li>Videos</li>
            <li>About</li>
            <li className='logo'>
                <div>Diamond Cross Weddings</div>
                <span>John Deo</span>
            </li>
            <li>Stores</li>
            <li>Shop</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar