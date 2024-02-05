import React, { useState } from "react";
import Image from "next/image";
import kbankLogo from "@/assets/images/kbank.svg";

const Withdraw = () => {
  return (
    <div className="headerprocess">
      <h1 className="text-center text-3xl my-3">
        <i class="fa-solid fa-check checkbtn"></i>ถอนเงิน
      </h1>

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
        <span className="text-sm text-black">จำนวนเงินที่ต้องการถอน</span>
        <input
          type="text"
          className="w-full rounded-full p-2 pl-5 mt-3 focus:outline-none text-black shadow-md filter drop-shadow-md focus:bg-gray-200"
          placeholder="฿ 0.00"
        />
      </div>
      <div className="confirmwithdraw my-5">
        <div className="flex items-center justify-center">
          <button className="btn-wit p-3 rounded-md text-sm w-40 ">
            ยืนยันการถอน
          </button>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
