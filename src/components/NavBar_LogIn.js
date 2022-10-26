import React from 'react';
import "../components/NavBar_LogIn.css";

import { Link } from 'react-router-dom'

const NavBar_LogIn = () => {
  return (
    <div className="header">
        <Link to="">O.T.</Link>

        <ul className="navList">
            <li>
                <Link to="">NOTIFICATION</Link>
            </li>
            <li>
                <Link to="">HELP</Link>
            </li>
        </ul>

    </div>
  )
}

export default NavBar_LogIn