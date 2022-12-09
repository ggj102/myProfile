import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickAccordion = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="accordion_btn" onClick={onClickAccordion}>
        <span className="point_text">{title}</span>
        {/* <FontAwesomeIcon icon="fa-triangle" size="2x" /> */}
      </button>
      <div className={isOpen ? "" : "display_none"}>{children}</div>
    </>
  );
}
