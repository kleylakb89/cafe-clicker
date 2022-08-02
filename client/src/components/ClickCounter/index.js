import React, { useState, } from 'react';
import Avac1 from "../../images/Avac1.png";

export default function ClickCounter() {
  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count + 1));
  };

  return (
    <>
    <div className="toast">
    <button type="button"><img src={Avac1} alt="Avocado" width="700px" className="avac-img" onClick={handleClick}/></button></div>
          <div className="counter">Click Count:</div>
    <div className="num-of-clicks">{count}</div>
    </>
  );
}