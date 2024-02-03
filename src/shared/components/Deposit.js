"use client";

import AccordionItem from "./AccordionItem";

const Deposit = () => {
  return (
    <div className="tabcontent">
      <div className="headerprocess mt-30">
        <h1 className="text-center  text-3xl"> + ฝากเงิน</h1>
        <div className="accordion-div mt-10">
          <div className="pdingaccord">
            <AccordionItem title="ธนาคาร" index={1}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the{" "}
              </p>
            </AccordionItem>
            <AccordionItem title="Truemoneywallet" index={2}>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000
              </p>
            </AccordionItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
