import React from "react";

const Card = () => {
  return (
    <div className="my-3 px-3 md:px-16">
      <div className="p-3 border-[#dea85f] border-2 rounded-lg shadow-lg bg-gradient-to-b from-purple-600 to-indigo-800">
        <div className="flex flex-row items-end justify-between">
          <div className="rounded-full border border-1 p-5 shadow-lg">
            <i className="fa-solid fa-wallet text-4xl"></i>
          </div>
          <div>
            <div>
              <i className="fa-solid fa-coins"></i>&nbsp;ยอดเครดิตของคุณ
            </div>
            <div className="text-[#ffe37c] text-lg">
              <span className="text-3xl">900.00</span> บาท
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div>
          <i className="fa-solid fa-gift"></i>&nbsp;&nbsp;โปรโมชั่น :
          ไม่รับโบนัส
        </div>
        <div className="flex flex-row items-center justify-center mt-5">
          <div className="mr-3">
            <button className="btn-suggest p-2 rounded-md w-48"> 
              <i className="fa-solid fa-user-plus"></i>&nbsp;แนะนำเพื่อน
            </button>
          </div>
          <div>
            <button className="bg-[#462766] p-2 rounded-md w-48 hover:bg-transparent shadow-lg">
            <i className="fa-solid fa-hands-bound"></i>&nbsp;คอมมิชชั่น
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
