import React, { useState } from "react";

import Career from "./Career/Career";
import Develop from "./Develop";
import Refactoring from "./Refactoring";
import UnitTest from "./UnitTest";

export default function CareerDescription() {
  const [currnetTab, setCurrnetTab] = useState(0);

  const onClickChangeTab = (num) => {
    setCurrnetTab(num);
  };

  return (
    <div className="info">
      <div className="tab_wrapper">
        <button
          className={currnetTab === 0 ? "current_tab" : ""}
          onClick={() => onClickChangeTab(0)}
        >
          경력사항
        </button>
        <button
          className={currnetTab === 1 ? "current_tab" : ""}
          onClick={() => onClickChangeTab(1)}
        >
          개발
        </button>
        <button
          className={currnetTab === 2 ? "current_tab" : ""}
          onClick={() => onClickChangeTab(2)}
        >
          리팩토링
        </button>
        <button
          className={currnetTab === 3 ? "current_tab" : ""}
          onClick={() => onClickChangeTab(3)}
        >
          테스트
        </button>
      </div>
      <Career isCurrent={currnetTab === 0} />
      <Develop isCurrent={currnetTab === 1} />
      <Refactoring isCurrent={currnetTab === 2} />
      <UnitTest isCurrent={currnetTab === 3} />
    </div>
  );
}
