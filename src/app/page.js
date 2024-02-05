"use client";

import { useState } from "react";

import {
  CardComponent,
  UserHeaderComponent,
  MenuComponent,
  WithdrawComponent,
  DepositComponent,
  PromotionComponent,
  ActivityComponent,
  ResetPasswordComponent,
  RecordComponent,
  PlayGameComponent,
  AccountComponent,
} from "@/shared/components";
import { componentsState } from "@/shared/stores";

export default function Home() {
  const [active, setActive] = useState(false);
  const { cpName, menuActive, setMenuActive, setCpName } = componentsState();
  const handleActive = () => {
    setMenuActive(false);
    setCpName("home");
  };
  return (
    <main className="">
      <div className="container mx-auto py-5 relative z-30">
        <div className="flex justify-center items-center ">
          <div className="bg-[#868cf533] shadow-xl  p-3 rounded-3xl w-10/12 md:w-2/4">
            <UserHeaderComponent />
            <CardComponent />
            {!menuActive && <MenuComponent />}
            {menuActive && <button onClick={handleActive}>back</button>}
            {/* components */}
            {/* Deposit */}
            {menuActive && cpName == "deposit" && <DepositComponent />}
            {/* Withdraw */}
            {menuActive && cpName == "withdraw" && <WithdrawComponent />}
            {/* Promotion */}
            {menuActive && cpName == "promotion" && <PromotionComponent />}
            {/* Activity */}
            {menuActive && cpName == "activity" && <ActivityComponent />}
            {/* ResetPassword */}
            {menuActive && cpName == "resetpassword" && (
              <ResetPasswordComponent />
            )}
            {/* Record */}
            {menuActive && cpName == "record" && <RecordComponent />}
            {/* PlayGame */}
            {menuActive && cpName == "playgame" && <PlayGameComponent />}
            {/* Account */}
            {menuActive && cpName == "account" && <AccountComponent />}
          </div>
        </div>
      </div>
    </main>
  );
}
