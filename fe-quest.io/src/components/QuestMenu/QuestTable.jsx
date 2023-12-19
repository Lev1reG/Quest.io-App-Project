"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const QuestTable = ({ openForm, edit }) => {
  const router = useRouter();
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
  const finishTask = async (quest, desc, dl, id) => {
    const result = window.confirm(
      "Are you sure want to finish this task king?"
    );
    if (result) {
      try {
        const response = await axios.put(
          `https://localhost:7189/api/Todos/${id}`,
          {
            id: id,
            quest: quest,
            desc: desc,
            dl: dl,
            done: true,
          }
        );
        getQuests();
        console.log(response.data);
      } catch (err) {
        console.error("Error updating data : ", err);
      }
    }
    router.refresh();
    getQuests();
  };
  const deleteQuest = async (id) => {
    const result = window.confirm("Are you sure want to delete this task?");
    if (result) {
      try {
        const response = await axios.delete(
          `https://localhost:7189/api/Todos/${id}`
        );
        getQuests();
        console.log(response.data);
      } catch (err) {
        console.error("Error deleting data : ", err);
      }
    }
  };
  const handleEditButton = async (quest, desc, dl, id) => {
    setOpenQuestForm((prev) => !prev);
    setEdit(true);

    setEditQuest(quest);
    setEditDesc(desc);
    setEditDl(dl);
    setEditId(id);
  };
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
              <td className="text-center px-2">
                {item.done ? (
                  <MdCheckBox className="text-[#7A3E12] w-[120%] h-[120%]" />
                ) : (
                  <button type=" submit">
                    <MdOutlineCheckBoxOutlineBlank
                      className="text-[#7A3E12] w-[120%] h-[120%] cursor-pointer"
                      onClick={() =>
                        finishTask(item.quest, item.desc, item.dl, item.id)
                      }
                    />
                  </button>
                )}
              </td>
              <td className="pl-2">
                <img
                  src="/QuestList/edit-icon.png"
                  className="w-[65%]"
                  draggable="false"
                  onClick={() => {
                    handleEditButton(item.quest, item.desc, item.dl, item.id);
                  }}
                />
              </td>
              <td className="">
                <img
                  src="/QuestList/trash-icon.png"
                  className="w-[65%] cursor-pointer"
                  draggable="false"
                  onClick={() => deleteQuest(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default QuestTable;
