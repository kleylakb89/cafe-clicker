import React from "react";
import "./style.css";
import Auth from '../../utils/auth';
import CafeState from '../../pages/Cafe/index';


function Nav({cafe}) {
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
      {/* <div>
        <a className="tile" href="/cafe">
          <CafeState cafe={cafe} />
        </a>
      </div> */}
    </div>
  );
}

export default Nav;