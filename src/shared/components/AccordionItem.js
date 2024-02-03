"use client";

import { componentsState } from "../stores";
import { Collapse } from "react-collapse";

const AccordionItem = ({ title, children, index }) => {
  const isOpen = componentsState((state) =>
    index === 1 ? state.isOpen1 : state.isOpen2
  );
  const toggleAccordion = componentsState((state) =>
    index === 1 ? state.toggleAccordion1 : state.toggleAccordion2
  );

  return (
    <div>
      <button
        onClick={toggleAccordion}
        style={{ cursor: "pointer" }}
        className="bg-gradient-to-br from-yellow-300 to-brown-800 p-4 my-2  flex justify-between w-full"
      >
        <div>{title}</div>
        {isOpen ? <span>-</span> : <span>+</span>}
      </button>
      <Collapse isOpened={isOpen}>
        <div>{children}</div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
