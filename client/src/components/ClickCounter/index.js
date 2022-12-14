import React, { useState } from 'react';
import './style.css';
import Avac1 from "../../images/Avacado 1.png";
import Avac2 from "../../images/Avacado 2.png";
import Avac3 from "../../images/Avacado 3.png";
import Avac4 from "../../images/Avacado 4.png";
import Avac5 from "../../images/Avacado 5.png";
import Avac6 from "../../images/Avacado 6.png";
import Avac7 from "../../images/Avacado 7.png";


export default function ClickCounter({ count, handleClick }) {
  // set up the avocado image to update based on a random rolled number every time user clicks
  const [avocado, setAvocado] = useState(Avac1);
  const changeToast = () => {
    // handleclick is called for updating the click count, and then random number rolls
    handleClick();
    const random = Math.floor(Math.random() * 7);
    // based on which number is rolled, that associated picture is assigned to the avocado image source
    // eslint-disable-next-line default-case
    switch (random) {
      case 0:
        setAvocado(Avac1);
        break;
      case 1:
        setAvocado(Avac2);
        break;
      case 2:
        setAvocado(Avac3);
        break;
      case 3:
        setAvocado(Avac4);
        break;
      case 4:
        setAvocado(Avac5);
        break;
      case 5:
        setAvocado(Avac6);
        break;
      case 6:
        setAvocado(Avac7);
        break;
    }
  }
  return (
    <>
    <div className='powerside'>
      <div className="counter">Click Count:</div>
      <div className="num-of-clicks">{count}</div>
      </div>
      <div className="toast">
        <div><img src={avocado} alt="Avocado Toast" className="avac-img" onClick={changeToast} /></div>
      </div>
    </>
  );
}