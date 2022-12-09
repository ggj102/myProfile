import React, { useState } from "react";

import Career from "./Career/Career";
import Develop from "./Develop";
import Refactoring from "./Refactoring";
import UnitTest from "./UnitTest";

export default function CareerDescription() {
  return (
    <div className="info">
      <Develop />
      <Refactoring />
      <UnitTest />
    </div>
  );
}
