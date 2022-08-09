import React from "react";
import "./style.css";
import Auth from "../../utils/auth";
import spatula from "../../images/spatula.png";

// Nav bar with a signout function to logout users
function Nav({ handleView, check }) {
  const signout = () => {
    Auth.logout();
  };
  const openHamburger = () => {
    document.querySelector("#hamburger").style.width = "100%";
    document.querySelectorAll(".open")[0].style.opacity = 0;
  }
  const closeHamburger = () => {
    document.querySelector("#hamburger").style.width = "0";
    document.querySelectorAll(".open")[0].style.opacity = 1;
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="menu-items">
            <li>
              <a href="/game">Home</a>
            </li>
            <li>
              <a href="/" onClick={signout}>
                Logout
              </a>
            </li>
            <li>
              <a href="/leaderboard">Leader Board</a>
            </li>
            <li className="view-button" onClick={handleView}>
              <a href="#cafe">{`${check ? 'Close Cafe' : 'View Cafe'}`}</a>
            </li>
          </ul>
          <img src={spatula} alt="spatula" className="logo" width="100"></img>
        </div>
      </nav>
      <span className="open" id="ham-menu" onClick={openHamburger}>
        &#9776; Menu
      </span>
      <div id="hamburger" className="overlay">
        <a href="" onClick={closeHamburger} className="close" id="x">
          X
        </a>
        <div className="overlay-content">
          <a href="/game">Home</a>
          <a href="/leaderboard">Leader Board</a>
          <a href="#cafe" onClick={handleView}>View Cafe</a>
          <a href="/" onClick={signout}>Logout</a>
        </div>
      </div>
    </>
  );
}

export default Nav;
