import React, { useState } from "react";
import Image from "next/image";
import kbankLogo from "@/assets/images/kbank.svg";

const Withdraw = () => {
  return (
    <div className="headerprocess">
      <h1 className="text-center text-3xl mb-3"> + ถอนเงิน</h1>
      <div className="bgback">
        <div class="flex justify-between">
          <div class=" text-black">
            <span className="font-semibold text-lg">
              ถอนเงินเข้าบัญชีธนาคาร
            </span>
            <p> ชื่อ : ทดสอบ ทดสอบ</p>
            <p> เลขที่บัญชี : 861-2160-462</p>
            <p> ธนาคารกสิกรไทย</p>
          </div>
          <div class="flex justify-items-center">
            {/* <span>02</span> */}
            <Image
              className=""
              src={kbankLogo.src}
              alt="kbank"
              width={70}
              height={40}
            />
          </div>
        </div>
      </div>
      <div className="wdsec02">
        <div class="flex justify-between">
          <div class=" text-white">
            <span className="font-semibold text-lg">จำนวนเงินที่ถอนได้</span>
            <p className="text-base"> ฿ 0.00</p>
          </div>
          <div class="text-white">
            <span className="font-semibold text-lg">ยอดถอนขั้นต่ำ</span>
            <p className="text-base"> ฿ 300.00</p>
          </div>
        </div>
      </div>
      <div className="tablewd01 mt-10">
        <span className="text-sm text-slate-500">จำนวนเงินที่ต้องการถอน</span>
        <input type="text" className="w-full rounded-full p-2 pl-5 mt-3 focus:outline-none text-black shadow-md filter drop-shadow-md focus:bg-gray-200" placeholder="฿ 0.00" />

      </div>
      <div className="confirmwithdraw my-5">
        <div className="flex items-center justify-center"> 
        <button className="btn-wit p-3 rounded-md text-sm w-40 ">ยืนยันการถอน</button>
        </div>
      </div>
    </div>

    // {/* <div id="withdraw" className="tabcontent">
    //       <h1 className="text-center text-3xl"> + ฝากเงิน</h1>
    //       <div className="bgback">
    //         <table className="tablewd01" align="center">
    //           <tbody>
    //             <tr>
    //               <td className="text-left text-black">
    //                 <span className="font-bold text-lg">
    //                   ถอนเงินเข้าบัญชีธนาคาร
    //                 </span>{" "}
    //                 <br />
    //                 ชื่อ : ทดสอบ ทดสอบ <br />
    //                 เลขที่บัญชี : 861-2160-462 <br />
    //                 ธนาคารกสิกรไทย
    //               </td>
    //               <td className="text-center">
    //                 <Image
    //                   src={kbankLogo.src}
    //                   alt="kbank"
    //                   width={60}
    //                   height={40}
    //                 />
    //               </td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //       <div className="px-5 md:px-25"> {/* ระบุ margin สำหรับหน้าจอขนาดเล็ก */}
    //         <div className="wdsec02">
    //           <table className="tablewd01" align="center">
    //             <tbody>
    //               <tr>
    //                 <td> จำนวนเงินที่ถอนได้</td>
    //                 <td className="text-right"> ยอดถอนขั้นต่ำ</td>
    //               </tr>
    //               <tr>
    //                 <td>฿ 0.00</td>
    //                 <td className="text-right"> ฿ 300.00</td>
    //               </tr>
    //             </tbody>
    //           </table>
    //         </div>
    //       </div>
    //       <div className="tablewd01 mx-auto my-5 md:my-10"> {/* ระบุ margin สำหรับหน้าจอขนาดเล็ก */}
    //         <div className="p-5"> {/* ระบุ padding สำหรับหน้าจอขนาดเล็ก */}
    //           <div className="form-group">
    //             <span className="text-black text-lg">
    //               จำนวนเงินที่ต้องการถอน
    //             </span>
    //             <input
    //               type="text"
    //               id="withdraw"
    //               className="loginform01 number p-3 md:p-10 mt-3 md:mt-10" {/* ระบุ padding สำหรับหน้าจอขนาดเล็ก */}
    //               placeholder="฿ 0.00"
    //               value={withdrawAmount}
    //               onChange={(e) => setWithdrawAmount(e.target.value)}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="text-center mt-5 md:mt-10 px-5 md:px-30"> {/* ระบุ margin สำหรับหน้าจอขนาดเล็ก */}
    //         <button className="mcolor colorbtn01" onClick={handleWithdraw}>
    //           <i className="fal fa-hand-holding-usd"></i> ยืนยันการถอน
    //         </button>
    //       </div>
    //     </div>     */}
  );
};

export default Withdraw;
