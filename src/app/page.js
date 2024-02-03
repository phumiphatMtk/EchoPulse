"use client";

import { useState } from "react";
import Image from "next/image";
import ezslot from "@/assets/images/ez-slot-cover-foreground.png";
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
    <main className="relative bg-gradient-to-b from-purple-600 via-indigo-700 to-purple-900 bg-cover bg-center h-screen">
      <div className="container mx-auto py-5 relative z-30">
        <div className="flex justify-center items-center ">
          <div className="shadow-md w-2/4 p-3 rounded-3xl">
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
      {/* image bottom */}
      <div className="absolute bottom-0 w-full z-10">
        <Image
          className="w-full"
          src={ezslot.src}
          alt="ez-slot"
          width={600}
          height={400}
        />
      </div>
    </main>
  );
}
