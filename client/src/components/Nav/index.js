import React from "react";
import "./style.css";
import Auth from '../../utils/auth';
import spatula from '../../images/spatula.png'


function Nav() {
  const signout = () => {
    Auth.logout();
  }
  return (
    <nav className="navbar">
    <div className="navbar-container">
        <ul className="menu-items">
            <li><a href="/game">Home</a></li>
            <li><a href="/" onClick={signout}>Logout</a></li>
            <li><a href="/leaderboard">Leader Board</a></li>
            <li><a href="#view-cafe">View Cafe</a></li>
        </ul>
        <img src={spatula} alt="spatula" className="logo" width="100" ></img>
    </div>
</nav>
    
  );
}

export default Nav;