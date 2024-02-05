import React from "react";
import { componentsState } from "../stores";
const Menu = () => {
  const { setMenuActive, setCpName } = componentsState();
  const handleMeunuState = (active, menu) => {
    setMenuActive(active);
    setCpName(menu);
  };
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 justify-items-center">
        <div className="text-center">
          <button
            onClick={() => handleMeunuState(true, "deposit")}
            className="bg-[#d29517] p-2 rounded-full w-12 h-12 border-yellow-500 border-2 hover:bg-gradient-to-t from-yellow-200 to-orange-500"
          >
            <i className="fa-solid fa-plus text-3xl"></i>
          </button>
          <div className="text-black">ฝากเงิน</div>
        </div>
        <div className="text-center">
          <button
            onClick={() => handleMeunuState(true, "withdraw")}
            className="bg-[#d29517] p-2 rounded-full w-12 h-12 border-yellow-500 border-2 hover:bg-gradient-to-t from-yellow-200 to-orange-500"
          >
            <i className="fa-solid fa-minus text-3xl"></i>
          </button>
          <div className="text-black">ถอนเงิน</div>
        </div>
        <div className="text-center">
          <button
            onClick={() => handleMeunuState(true, "promotion")}
            className="bg-[#d29517] p-2 rounded-full w-12 h-12 border-yellow-500 border-2 hover:bg-gradient-to-t from-yellow-200 to-orange-500"
          >
            <i className="fa-solid fa-gift text-2xl"></i>
          </button>
          <div className="text-black">โปรโมชั่น</div>
        </div>
        <div className="text-center">
          <button
            onClick={() => handleMeunuState(true, "activity")}
            className="bg-[#d29517] p-2 rounded-full w-12 h-12 border-yellow-500 border-2 hover:bg-gradient-to-t from-yellow-200 to-orange-500"
          >
            <i className="fa-solid fa-calendar text-2xl"></i>
          </button>
          <div className="text-black">กิจกรรม</div>
        </div>
        <div className="text-center">
          <button
            onClick={() => handleMeunuState(true, "resetpassword")}
            className="bg-[#d29517] p-2 rounded-full w-12 h-12 border-yellow-500 border-2 hover:bg-gradient-to-t from-yellow-200 to-orange-500"
          >
            <i className="fa-solid fa-lock text-2xl"></i>
          </button>
          <div className="text-black">เปลี่ยนรหัส</div>
        </div>
        <div className="text-center">
          <button
            onClick={() => handleMeunuState(true, "record")}
            className="bg-[#d29517] p-2 rounded-full w-12 h-12 border-yellow-500 border-2 hover:bg-gradient-to-t from-yellow-200 to-orange-500"
          >
            <i className="fa-solid fa-clock-rotate-left text-2xl"></i>
          </button>
          <div className="text-black">ประวัติ</div>
        </div>
        <div className="text-center">
          <button
            onClick={() => handleMeunuState(true, "playgame")}
            className="bg-[#d29517] p-2 rounded-full w-12 h-12 border-yellow-500 border-2 hover:bg-gradient-to-t from-yellow-200 to-orange-500"
          >
            <i className="fa-solid fa-gamepad text-2xl"></i>
          </button>
          <div className="text-black">เข้าเล่นเกม</div>
        </div>
        <div className="text-center">
          <button
            onClick={() => handleMeunuState(true, "account")}
            className="bg-[#d29517] p-2 rounded-full w-12 h-12 border-yellow-500 border-2 hover:bg-gradient-to-t from-yellow-200 to-orange-500"
          >
            <i className="fa-solid fa-user text-2xl"></i>
          </button>
          <div className="text-black">บัญชี</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
