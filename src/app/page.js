"use client";

import { useState } from "react";
import Image from "next/image";
import ezslot from "@/assets/images/ez-slot-cover-foreground.png";
import { CardComponent, UserHeaderComponent } from "@/shared/components";
import { componentsState } from "@/shared/stores";

export default function Home() {
  const [active, setActive] = useState(false);
  const { menuActive, setMenuActive } = componentsState();
  const handleActive = () => {
    setActive(!active);
    setMenuActive(active);
  };
  return (
    <main className="relative bg-gradient-to-b from-purple-600 via-indigo-700 to-purple-900 bg-cover bg-center h-screen">
      <div className="container mx-auto py-5">
        <div className="flex justify-center items-center ">
          <div className="shadow-md w-2/4 p-3">
            <button onClick={handleActive}>Active menu</button>
            {menuActive && <UserHeaderComponent />}
            <CardComponent />

            {/* components */}
            {/* Deposit */}
            <div className="flex">
            </div>
            {/* Withdraw money */}
            <div className="flex"></div>
          </div>
        </div>
      </div>
      {/* image bottom */}
      <div className="absolute bottom-0 w-full">
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
