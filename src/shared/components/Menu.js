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
      <div class="grid grid-cols-4 gap-4 justify-items-center">
        <div>
          <button onClick={() => handleMeunuState(true, "deposit")}>
            Deposit
          </button>
        </div>
        <div>
          <button onClick={() => handleMeunuState(true, "withdraw")}>
            Withdraw
          </button>
        </div>
        <div>
          <button onClick={() => handleMeunuState(true, "promotion")}>
            Promotion
          </button>
        </div>
        <div>
          <button onClick={() => handleMeunuState(true, "activity")}>
            Activity
          </button>
        </div>
        <div>
          <button onClick={() => handleMeunuState(true, "resetpassword")}>
            Resetpassword
          </button>
        </div>
        <div>
          <button onClick={() => handleMeunuState(true, "record")}>
            Record
          </button>
        </div>
        <div>
          <button onClick={() => handleMeunuState(true, "playgame")}>
            Playgame
          </button>
        </div>
        <div>
          <button onClick={() => handleMeunuState(true, "account")}>
            Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
