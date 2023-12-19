"use client";

import Image from "next/image";

const QuestSection = ({ OpenSection, part }) => {
  return (
    <>
      <div className="z-10 absolute flex w-full justify-center items-center">
        <div className="relative 2xl:w-[1536px] w-[85%] aspect-[1640/983] flex flex-col justify-center items-center">
          <div className="absolute -z-10 w-[85.4167%] aspect-[1640/983]">
            <Image
              src="/QuestList/background-quest-list.png"
              fill
              className="object-contain"
              alt="scroll"
              draggable="false"
            />
          </div>
          <div className="absolute top-[8.5%] w-[85.4167%] flex justify-end">
            <img
              src="/QuestList/exit-icon.png"
              className="w-[5%] aspect-[89/86] cursor-pointer"
              draggable="false"
              onClick={OpenSection}
            />
            <div className="bg-transparent w-[13%]" />
          </div>
          {part}
        </div>
      </div>
    </>
  );
};

export default QuestSection;
