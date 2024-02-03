import React from "react";
import { componentsState } from "../stores";
const Menu = () => {
  const { setMenuActive, setCpName } = componentsState();
  const handleMeunuState = (active, menu) => { 
    setMenuActive(active);
    setCpName(menu);
  }
  return (
    <div>
      <div class="grid grid-cols-4 gap-4">
        <div>
          <button onClick={() => handleMeunuState(true, "withdraw")}>Withdraw</button>
        </div>
        <div>
          <button>Deposit</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
