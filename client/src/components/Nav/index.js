import React from "react";
import "./style.css";
import Auth from '../../utils/auth';


function Nav() {
  const signout = () => {
    Auth.logout();
  }
  return (
    <div className="flex-container">
      <div>
        <a className="tile" href="/">
          Home
        </a>
      </div>
      <div>
        <a className="tile" href="/login" onClick={signout}>
          Logout
        </a>
      </div>
      <div>
        <a className="tile" href="/leaderboard">
          Leader Board
        </a>
      </div>
      <div>
        <a className="tile" href="/">
          View Cafe
        </a>
      </div>
    </div>
  );
}

export default Nav;