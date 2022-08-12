import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='Navbar'>
        <ul>
            <li>
                <Link to='/'>All</Link>
            </li>
            <li>
                <Link to='/news'>News</Link>
            </li>
            <li>
                <Link to='/images'>Images</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar