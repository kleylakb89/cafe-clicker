import React from "react";
import "./style.css";

function Nav() {
  return (
    <div className="flex-container">
      <div>
        <a className="tile" href="/">
          Logout
        </a>
      </div>
      <div>
        <a className="tile" href="/">
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