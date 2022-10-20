import React from 'react'
import "../components/NavBar_Styles.css";

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="header">
        <Link to="">O.T</Link>

        <ul className="navList">
            <li>
                <Link to="">NOTIFICATION</Link>
            </li>
            <li>
                <Link to="">HELP</Link>
            </li>
            <li>
                <Link to="/">LogOut</Link>
                {/* DROP DOWN DAPAT TOH PARA MAY IBA PANG MENU !! */}
            </li>
        </ul>

    </div>
  )
}

export default NavBar