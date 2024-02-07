"use client";

import { useState } from "react";

const PlayGame = () => {
  const [gamesList, setGmameList] = useState(["sexy", "sa game", "wm"]);
  const handleTab = (code) => {
    setGmameList([]);
    let list = [];
    switch (code) {
      case "casino":
        list = ["sexy", "sa game", "wm"]; // api
        setGmameList(list);
        break;
      case "slot":
        list = ["JDB", "JOKER", "PG"];
        setGmameList(list);
        break;
      case "game":
        list = ["ป๊อก", "Joker finish ", "KingMaker"];
        setGmameList(list);
        break;
      case "lotto":
        list = ["lotto"];
        setGmameList(list);
        break;
      default:
        list = ["sexy", "sa game", "wm"];
        setGmameList(list);
        break;
    }
  };

  return (
    <div className="px-5 mt-5">
      <div className="flex flex-row items-center justify-center">
        <div className="mr-5">
          <button onClick={() => handleTab("casino")}>คาสิโน</button>
        </div>
        <div className="mr-5">
          <button onClick={() => handleTab("slot")}>สล๊อต</button>
        </div>
        <div className="mr-5">
          <button onClick={() => handleTab("game")}>เกม</button>
        </div>
        <div className="mr-5">
          <button onClick={() => handleTab("lotto")}>หวย</button>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-3">
        {gamesList.map((game) => (
          <div key={game}>{game}</div>
        ))}
      </div>
    </div>
  );
};

export default PlayGame;
