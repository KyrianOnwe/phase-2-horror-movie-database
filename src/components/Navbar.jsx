import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='navbar'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/watched">Watched Movies</Link></li>
            <li><Link to="/add">Add a New Flick</Link></li>
        </ul>
    </div>
  )
}

export default Navbar