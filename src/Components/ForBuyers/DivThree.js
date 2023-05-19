import React from "react";

import * as d from "./Buyer.styled";
import Styles from './buyer.module.css'
const DivThree = () => {
  return (
    <>
      <d.DivThreeCon className={Styles.bannerImg}>
        <d.DivThreeInnerCon>
          <d.DivThreeInnerConLeft>
            <div
              style={{
                margin: "30px 0px",
                fontSize: "24px",
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              That’s right! You can register on every marketplace that interests
              you.
            </div>
            <div
              style={{ fontSize: "15px", fontWeight: 400, color: "#FFFFFF", }}
            >
              On each marketplace HangerStock Auction network, you are buying directly
              from that retailer. Feel free to register on as many marketplaces
              as you like!
            </div>
          </d.DivThreeInnerConLeft>

          <d.DivThreeInnerConRight>
            <img
              src={require("../../Constants/Svgs/image 20.png")}
              style={{
                borderRadius: "10px",
                height: "100%",
                width: "100%",
              }}
            />
          </d.DivThreeInnerConRight>
        </d.DivThreeInnerCon>
      </d.DivThreeCon>
    </>
  );
};

export default DivThree;
