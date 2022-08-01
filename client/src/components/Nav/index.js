import React from "react";
import "./style.css";

function Nav() {
  return (
    <div class="flex-container">
      <div>
        <a class="tile" href="#">
          Logout
        </a>
      </div>
      <div>
        <a class="tile" href="/">
          Leader Board
        </a>
      </div>
      <div>
        <a class="tile" href="/">
          View Cafe
        </a>
      </div>
    </div>
  );
}

export default Nav;