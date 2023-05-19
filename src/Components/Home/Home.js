import React, { useEffect } from "react";
import * as h from "./home.styled";

//components
import RowOneOnline from "./RowOneOnline";
import RowTwoWel from "./RowTwoWel";
import RowThreeHow from "./RowThreeHow";
import RowFourGarment from "./RowFourGarment";
import RowFiveCate from "./RowFiveCate";
import RowSixQuote from "./RowSixQuote";
import RowSevenBlog from "./RowSevenBlogs";
import RowEightRegister from "./RowEightRegister";
import Styles from './home.module.css'

const Home = () => {

  
  return (
    <>
      <div className={Styles.homeBg}>
      <RowOneOnline />
      <RowTwoWel />
      <RowThreeHow />
      <RowFourGarment />
      <RowFiveCate />
      <RowSixQuote />
      
      </div>
      <div className={Styles.wondering}>
      <RowSevenBlog />
      <RowEightRegister />
      </div>
    </>
  );
};

export default Home;