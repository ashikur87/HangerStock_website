import React from "react";

import DivOne from "./DivOne";
import DivTwo from "./DivTwo";
import DivThree from "./DivThree";
import Styles from './support.module.css'
const Support = () => {
  return (
    <div className={Styles.support} style={{ marginBottom: "100px" }}>
      <DivOne />
      <DivTwo />
      <DivThree />
    </div>
  );
};

export default Support;
