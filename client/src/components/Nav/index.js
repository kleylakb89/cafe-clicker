import React from "react";
import "./style.css";
import Auth from '../../utils/auth';
import spatula from '../../images/spatula.png'


function Nav() {
  const signout = () => {
    Auth.logout();
  }
  return (
    <nav class="navbar">
    <div class="navbar-container">
        <ul class="menu-items">
            <li><a href="/">Home</a></li>
            <li><a  href="/login" onClick={signout}>Logout</a></li>
            <li><a href="/leaderboard">Leader Board</a></li>
        </ul>
        <img src={spatula }class="logo" width="100" ></img>
    </div>
</nav>
    
  );
}

export default Nav;