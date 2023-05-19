import React, { useEffect } from "react";

//components
import DivOne from "./DivOne";
import DivTwo from "./DivTwo";
import DivThree from "./DivThree";
import DivFour from "./DivFour";
import RowEightRegister from "../Home/RowEightRegister";
import Styles from './buyer.module.css'

const Forbuyer = () => {

  return (
    <>
     <div className={Styles.buyer}>
     <DivOne />
      <DivTwo />
      <DivThree />
      <DivFour />
     </div>
    </>
  );
};

export default Forbuyer;
