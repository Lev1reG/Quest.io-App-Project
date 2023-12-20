"use client";

import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";

const QuestTable = ({
  Quests,
  FinishTask,
  HandleEditButton,
  DeleteQuest,
  SetOpenQuestForm,
}) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#FCF7A5] gap-y-5 p-3">
      <h1 className="font-ArcadeClassic text-[#7A3E12] text-[50px]">
        QUESTS LIST
      </h1>
      <table className="font-PixelifySans text-[#7A3E12]">
        <thead>
          <tr>
            <th className="px-2 py-2">Quests</th>
            <th className="px-2 py-2">Desc</th>
            <th className="px-2 py-2">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {Quests.map((item, index) => (
            <tr key={index}>
              <td className="px-2 py-2">{item.quest}</td>
              <td className="px-2 py-2">{item.desc}</td>
              <td className="px-2 py-2">{item.dl}</td>
              <td className="text-center px-2">
                {item.done ? (
                  <MdCheckBox className="text-[#7A3E12] w-[120%] h-[120%]" />
                ) : (
                  <button type=" submit">
                    <MdOutlineCheckBoxOutlineBlank
                      className="text-[#7A3E12] w-[120%] h-[120%] cursor-pointer"
                      onClick={() =>
                        FinishTask(item.quest, item.desc, item.dl, item.id)
                      }
                    />
                  </button>
                )}
              </td>
              <td className="pl-2">
                <img
                  src="/QuestList/edit-icon.png"
                  className="w-[65%] cursor-pointer"
                  draggable="false"
                  onClick={() => {
                    HandleEditButton(item.quest, item.desc, item.dl, item.id);
                  }}
                />
              </td>
              <td className="">
                <img
                  src="/QuestList/trash-icon.png"
                  className="w-[65%] cursor-pointer"
                  draggable="false"
                  onClick={() => DeleteQuest(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="relative flex w-[20%] items-center justify-center hover:scale-105 hover:brightness-125 transition-all duration-300 ease-in-out"
        onClick={SetOpenQuestForm}
      >
        <img
          src="/QuestList/button.png"
          className="absolute w-full aspect-[5/1]"
          draggable="false"
        />
        <p className="z-10 font-ArcadeClassic text-[#7A3E12] text-[20px]">
          CREATE QUEST
        </p>
      </button>
    </div>
  );
};

export default QuestTable;
