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
        className="bg-gradient-to-br from-yellow-300 to-brown-800 p-4 my-2  flex justify-between w-full rounded-md"
      >
        <div>{title}</div>
        {/* {isOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-white shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <Collapse isOpened={isOpen}>
        <div>{children}</div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
