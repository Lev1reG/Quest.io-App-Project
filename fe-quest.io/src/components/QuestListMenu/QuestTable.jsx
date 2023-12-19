"use client";

import { useEffect, useState } from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";

const QuestTable = () => {
  const [quests, setQuests] = useState(null);

  const getQuests = async () => {
    const response = await fetch("https://localhost:7189/api/Todos");
    const data = await response.json();
    setQuests(data);
  };
  useEffect(() => {
    getQuests();
  }, []);

  if (!quests) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <table className="font-PixelifySans text-[#7A3E12]">
        <thead>
          <tr>
            <th className="px-4 py-2">Quests</th>
            <th className="px-3 py-2">Desc</th>
            <th className="px-3 py-2">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {quests.map((item, index) => (
            <tr key={index}>
              <td className="px-3 py-2">{item.quest}</td>
              <td className="px-3 py-2">{item.desc}</td>
              <td className="px-3 py-2">{item.dl}</td>
              <td className="text-center">
                {item.done ? (
                  <MdCheckBox className="text-[#7A3E12] w-[100%]" />
                ) : (
                  <MdOutlineCheckBoxOutlineBlank className="text-[#7A3E12] w-[100%]" />
                )}
              </td>
              <td className="px-2">
                <img src="/QuestList/edit-icon.png" className="w-[65%]" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default QuestTable;
