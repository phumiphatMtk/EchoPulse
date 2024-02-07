"use client";

import { useState } from "react";

const PlayGame = () => {
  const [gamesList, setGameList] = useState(["sexy", "sa game", "wm"]);
  const [activeButton, setActiveButton] = useState("casino");
  const handleTab = (code) => {
    setGameList([]);
    let list = [];
    switch (code) {
      case "casino":
        list = ["sexy", "sa game", "wm"]; // api
        setGameList(list);
        break;
      case "slot":
        list = ["JDB", "JOKER", "PG"];
        setGameList(list);
        break;
      case "game":
        list = ["ป๊อก", "Joker finish ", "KingMaker"];
        setGameList(list);
        break;
      case "lotto":
        list = ["lotto"];
        setGameList(list);
        break;
      default:
        list = ["sexy", "sa game", "wm"];
        setGameList(list);
        break;
    }
    setActiveButton(code);
  };

  return (
    <div className="headerprocess">
      <h1 className="text-center text-3xl my-3">
        <i className="fa-solid fa-gamepad checkbtn"></i>เข้าเล่นเกม
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

        <div class="grid grid-cols-3 gap-2">
          {gamesList.map((game) => (
            <div className="iningridgame w-full text-center" key={game}>
              {game}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
