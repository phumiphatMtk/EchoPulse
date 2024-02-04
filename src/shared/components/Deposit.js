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
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been
                  </p>
                </div>
                <div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem title="Truemoneywallet" index={2}>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000
                  </p>
                </div>
              </div>
            </AccordionItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
