"use client";

import Image from "next/image";
import QuestTable from "./QuestTable.jsx";

const QuestList = () => {
  return (
    <>
      <div className="z-10 absolute flex w-full justify-center items-center">
        <div className="relative 2xl:w-[1536px] w-[85%] aspect-[1640/983] flex flex-col justify-center items-center">
          <div className="absolute -z-10 w-full h-full">
            <Image
              src="/QuestList/background-quest-list.png"
              fill
              className="object-cover"
              alt="scroll"
              draggable="false"
            />
          </div>
          <div className="flex flex-col justify-center items-center bg-[#FCF7A5] gap-y-5">
            <h1 className="font-ArcadeClassic text-[#7A3E12] text-[50px]">
              QUESTS LIST
            </h1>
            <QuestTable />
            <button className="relative flex w-[20%] items-center justify-center">
              <img
                src="/QuestList/button.png"
                className="absolute w-full aspect-[5/1]"
              />
              <p className="z-10 font-ArcadeClassic text-[#7A3E12] text-[25px]">
                CREATE QUEST
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestList;
