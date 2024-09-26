import React from "react";
// import { Link } from "react-router-dom";
import '../styles/NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <div  className="logo"> <img src="https://s.alamy.com/logos/1.68.0/alamy.svg" alt="alamy" /> </div>
            <ul className="nav-links">
                <div id="nav-right">
                    <input type="search" placeholder="Search here for Photos & Videos..." />
                    <span id="s1"> <button> Sign in </button>  </span>
                    <span id="s1"> <button> Sign up </button>  </span>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar
