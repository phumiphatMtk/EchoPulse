"use client";

import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import kbank from "@/assets/images/kbank.svg";
import translate from "@/assets/images/translate.png";

const UserHeader = () => {
  return (
    <div className="px-16">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <div className="mr-3">
            <Image
              className="w-full"
              src={logo.src}
              alt="logo"
              width={35}
              height={35}
            />
          </div>
          <div>
            <div>
              <i class="fa-solid fa-user"></i>&nbsp;ทดสอบ ทดสอบ
            </div>
            <div>
              <div className="inline-block mr-1" style={{ width: "15px" }}>
                <Image
                  className="w-full"
                  src={kbank.src}
                  alt="logo"
                  width={15}
                  height={15}
                />
              </div>
              <div className="inline-block">8612160482</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row">
            <div className="mr-3" style={{ width: "32px" }}>
              <Image
                className="w-full"
                src={translate.src}
                alt="logo"
                width={15}
                height={15}
              />
            </div>
            <div className="mr-1">
              <button className="logoutbtn">
                <i class="fa-solid fa-power-off"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
