import React from "react";
import { GNB_MENU } from "../../../utils/constants/project";
import LNB from "../navigationBar/lnb/LNB";

import { GNBWrap } from "./GNB.styled";

const GNB = () => {
  return (
    <GNBWrap>
      {GNB_MENU.map((menu) => (
        <li key={menu.id}>
          <a href={menu.link}>{menu.label}</a>
        </li>
      ))}
    </GNBWrap>
  );
};

export default GNB;
