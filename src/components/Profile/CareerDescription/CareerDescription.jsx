import React, { useState } from "react";
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
          개발
        </button>
        <button
          className={currnetTab === 1 ? "current_tab" : ""}
          onClick={() => onClickChangeTab(1)}
        >
          리팩토링
        </button>
        <button
          className={currnetTab === 2 ? "current_tab" : ""}
          onClick={() => onClickChangeTab(2)}
        >
          테스트
        </button>
      </div>
      <Develop isCurrent={currnetTab === 0} />
      <Refactoring isCurrent={currnetTab === 1} />
      <UnitTest isCurrent={currnetTab === 2} />
    </div>
  );
}
