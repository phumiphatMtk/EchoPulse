"use client";

import { useEffect, useState } from "react";
import { postService } from "../services";
import Image from "next/image";

const PlayGame = () => {
  const [activeButton, setActiveButton] = useState("casino");
  const [casinoList, setCasinoList] = useState([]);
  const [slotList, setSlotList] = useState([]);
  const [lottoList, setLottoList] = useState([]);
  const [gamesList, setGameList] = useState([]);

  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    const payload = {
      method: "provider_list",
    };
    const { promise } = postService("", payload);
    const { success, data } = await promise;
    if (success && data.length > 0) {
      data.forEach(async (ele) => {
        if (ele.type == "slot") {
          const payloadSlot = {
            method: "game_list",
            provider_code: ele.code,
          };

          const { promise: promiseSlot } = postService("", payloadSlot);
          const { success: succesSlot, data: slotData } = await promiseSlot;
          if ((succesSlot, slotData.length > 0)) {
            slotData.forEach((slot) => {
              slot.provider_code = ele.code;
            });
            setSlotList((prev) => [...prev, ...slotData]);
          }
        }
      });
    }
  };

  const handleTab = (code) => {
    setActiveButton(code);
  };

  const lunchGame = async (providercode, gamecode) => {
    const payload = {
      method: "game_launch",
      user_code: "test",
      provider_code: providercode,
      game_code: gamecode,
      lang: "en",
    };

    const { promise } = postService("", payload);
    const { success, data } = await promise;
    if (success && data) {
      window.open(data.launch_url, "_blank");
    }
  };

  return (
    <div className="headerprocess">
      <h1 className="text-center text-3xl my-3">
        <i className="fa-solid fa-gamepad checkbtn"></i>เข้าเล่นเกม
        {process.env.NEXT_PUBLIC_AGENT_CDOE}
      </h1>
      <div className="tabcontent px-5 mt-5">
        <div className="flex flex-row items-center justify-center w-full space-x-2">
          <div
            className={`gameingtd w-full mb-5 ${
              activeButton === "casino" ? "btn-active" : ""
            }`}
          >
            <button onClick={() => handleTab("casino")}>
              <i className="fa-solid fa-sack-dollar mr-1"></i>คาสิโน
            </button>
          </div>
          <div
            className={`gameingtd w-full mb-5 ${
              activeButton === "slot" ? "btn-active" : ""
            }`}
          >
            <button onClick={() => handleTab("slot")}>
              <i className="fa-solid fal fa-dice mr-1"></i>สล๊อต
            </button>
          </div>
          <div
            className={`gameingtd w-full mb-5 ${
              activeButton === "game" ? "btn-active" : ""
            }`}
          >
            <button onClick={() => handleTab("game")}>
              <i className="fa-solid fa-gamepad mr-1"></i>เกม
            </button>
          </div>
          <div
            className={`gameingtd w-full mb-5 ${
              activeButton === "lotto" ? "btn-active" : ""
            }`}
          >
            <button onClick={() => handleTab("lotto")}>
              <i className="fa-solid fal fa-sort-numeric-up-alt mr-1"></i>หวย
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 game-list">
          {activeButton == "slot" &&
            slotList.map((game) => (
              <div
                className="iningridgame w-full text-center"
                key={game.game_code}
                onClick={() => lunchGame(game.provider_code, game.game_code)}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-3">
                    <img src={game.banner} alt={game.game_name} />
                  </div>
                  <div>{game.game_name}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
