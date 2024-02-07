import React from "react";
import Image from "next/image";
import scb from "@/assets/images/scb.svg";
import kbank from "@/assets/images/kbank.svg";
import truewallet from "@/assets/images/truewallet.svg";

const Record = () => {
  const scbList = [
    {
      src: scb,
      bankName: "ธนาคารไทยพาณิชย์",
      accountNumber: "859-2-59209-0",
      status: "รอดำเนินการ",
      amount: "250,000.00",
      date: "15/02/2021 05:50:34",
    },
    {
      src: kbank,
      bankName: "ธนาคารไทยพาณิชย์",
      accountNumber: "859-2-59209-0",
      status: "สำเร็จ",
      amount: "250,000.00",
      date: "15/02/2021 05:50:34",
    },
    {
      src: truewallet,
      bankName: "ธนาคารไทยพาณิชย์",
      accountNumber: "859-2-59209-0",
      status: "ไม่สำเร็จ",
      amount: "250,000.00",
      date: "15/02/2021 05:50:34",
    },
  ];

  return (
      <div className="headerprocess">
        <h1 className="text-center text-3xl my-3">
          <i className="fa-solid fa-clock-rotate-left checkbtn"></i>ถอนเงิน
        </h1>
      <div className="containprocess mt-5">
        <table className="w-full">
          <thead className="text-center">
            <tr>
              <th className="headdeposit active">
                <button id="btndeposithis">
                  <i
                    className="fa-solid fa-plus-circle"
                    style={{ color: "#fff" }}
                  ></i>{" "}
                  ประวัติการฝาก
                </button>
              </th>
              <th className="headwithdraw">
                <button id="btnwithdrawwhis">
                  <i
                    className="fa-solid fa-minus-circle"
                    style={{ color: "#fff" }}
                  ></i>{" "}
                  ประวัติการถอน
                </button>
              </th>
            </tr>
          </thead>
        </table>
        <div id="deposithis">
          <h2 className="text-black text-center mt-3">
            {" "}
            แสดงข้อมูล<span className="text-green-500">ฝากเงิน</span> 7
            วันย้อนหลัง
          </h2>
          <div className="containloophisdps">
            {scbList.map((item, index) => (
              <div className="historyofdps" key={index}>
                <table width="100%">
                  <tbody>
                    <tr>
                      <td width="50%" className="pt-4">
                        <table>
                          <tbody>
                            <tr>
                              <td className="pr-5">
                                <Image
                                  className="max-w-full h-auto"
                                  src={item.src}
                                  alt="scb"
                                  width={40}
                                  height={40}
                                />
                              </td>
                              <td className="text-left leading-20 spanofbankhis-td">
                                <span className="spanofbankhis">
                                  {item.bankName}
                                </span>
                                <br />
                                <span className="spanofbankhis">
                                  {item.accountNumber}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td width="50%" className="text-right leading-20">
                        <div className="statushistory">
                          <span className="statushistory">{item.status}</span>
                        </div>
                        <span className="moneyhisdps">
                          {" "}
                          <i className="fa-solid fa-plus-circle plushis"></i>{" "}
                          {item.amount} บาท
                        </span>
                        <br />
                        <span className="text-xs">{item.date}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
