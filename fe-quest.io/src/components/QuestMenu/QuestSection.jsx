"use client";

import Image from "next/image";

const QuestSection = ({ OpenSection, part }) => {
  return (
    <>
      <div className="z-10 absolute flex w-full justify-center items-center">
        <div className="relative 2xl:w-[1536px] w-[85%] aspect-[1640/983] flex flex-col justify-center items-center">
          <div className="absolute -z-10 w-[85.4167%] aspect-[1640/983] ">
            <Image
              src="/QuestList/background-quest-list.png"
              fill
              className="object-contain "
              alt="scroll"
              draggable="false"
            />
          </div>
          <div className="absolute w-[79px] aspect-[89/86] top-[10%] right-[19%]">
            <Image
              src="/QuestList/exit-icon.png"
              draggable="false"
              onClick={OpenSection}
              alt="exit button"
              fill
              className="object-contain hover:scale-105 hover:brightness-125 transition-all duration-300 ease-in-out"
            />
          </div>
          {part}
        </div>
      </div>
    </>
  );
};

export default QuestSection;
