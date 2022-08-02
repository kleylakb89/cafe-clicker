import React, { useState, } from 'react';
import Avac1 from "../../images/Avac1.png";

export default function ClickCounter({count, handleClick}) {

  return (
    <>
      <div className="toast">
        <div><img src={Avac1} alt="Avocado" width="700px" className="avac-img" onClick={handleClick} /></div>
      </div>
      <div className="counter">Click Count:</div>
      <div className="num-of-clicks">{count}</div>
    </>
  );
}