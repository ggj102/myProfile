import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickAccordion = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="accordion_btn" onClick={onClickAccordion}>
        <span className="point_text">{title}</span>
        <FontAwesomeIcon
          className="accordion_icon"
          icon={isOpen ? faCaretUp : faCaretDown}
          size="2x"
        />
      </button>
      <div className={isOpen ? "" : "display_none"}>{children}</div>
    </>
  );
}
