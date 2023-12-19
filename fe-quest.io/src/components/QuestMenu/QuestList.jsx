import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import axios from "axios";

const QuestList = () => {
  const [openQuestForm, setOpenQuestForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [quests, setQuests] = useState(null);
  const [editQuest, setEditQuest] = useState(null);
  const [editDesc, setEditDesc] = useState(null);
  const [editDl, setEditDl] = useState(null);
  const [editId, setEditId] = useState(null);
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

  const postQuest = async (e) => {
    if (editQuest === "") {
      e.preventDefault();
      alert("Please fill the form");
    } else {
      try {
        const response = await axios.post("https://localhost:7189/api/Todos", {
          quest: editQuest,
          desc: editDesc,
          deadline: editDl,
          done: false,
        });
        getQuests();
        console.log(response.data);
        alert("Data has been succesfully submitted");
        setOpenQuestForm((prev) => !prev);
      } catch (err) {
        console.error("Error posting data : ", err);
      }
    }
  };

  const updateData = async (id, e) => {
    if (editQuest === "") {
      e.preventDefault();
      alert("Please fill the form");
    } else {
      axios;
      try {
        const response = await axios.put(
          `https://localhost:7189/api/Todos/${id}`,
          {
            id: id,
            quest: editQuest,
            desc: editDesc,
            dl: editDl,
            done: false,
          }
        );
        getQuests();
        console.log(response.data);
        alert("Data has been succesfully updated");
        setOpenQuestForm((prev) => !prev);
      } catch (err) {
        console.error("Error updating data : ", err);
      }
    }
  };

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

  const handleEditButton = async (quest, desc, dl, id) => {
    setOpenQuestForm((prev) => !prev);
    setEdit(true);

    setEditQuest(quest);
    setEditDesc(desc);
    setEditDl(dl);
    setEditId(id);
  };

  const handleButton = () => {
    setOpenQuestForm((prev) => !prev);
    setEdit(false);
    setEditQuest("");
    setEditDesc("");
    setEditDl("");
  };
  return (
    <>
      {openQuestForm ? (
        <div className="flex flex-col justify-center items-center bg-[#FCF7A5] p-10 gap-8">
          <h1 className="font-ArcadeClassic text-[50px] text-[#7A3E12]">
            {edit ? "Edit Quest" : "Create Quest"}
          </h1>
          <form className="flex flex-col gap-y-[20px] font-PixelifySans text-[#7A3E12] text-[50px]">
            <div className="flex flex-row">
              <div className="w-[35%]">
                <label htmlFor="quest">Quest</label>
              </div>
              <div className="w-[700px]">
                <input
                  type="text"
                  className="text-[30px] bg-[#FFD26D] placeholder-[#7A3E12] w-full"
                  placeholder="Enter Quest"
                  id="quest"
                  value={editQuest}
                  onChange={(e) => setEditQuest(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-[35%]">
                <label htmlFor="desc">Desc</label>
              </div>
              <div className="w-[700px]">
                <input
                  type="text"
                  className="text-[30px] bg-[#FFD26D] placeholder-[#7A3E12] w-full"
                  placeholder="Enter Description"
                  id="desc"
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-[30%] ">
                <label htmlFor="dl">Deadline</label>
              </div>
              <div className="w-[65%]">
                <input
                  type="datetime-local"
                  className="text-[30px] bg-[#FFD26D] placeholder-[#7A3E12] w-full"
                  value={editDl}
                  onChange={(e) => setEditDl(e.target.value)}
                />
              </div>
            </div>
          </form>
          <div className="flex flex-row justify-center items-center w-full gap-8">
            <button
              className="relative flex w-[20%] items-center justify-center"
              onClick={
                edit ? (e) => updateData(editId, e) : (e) => postQuest(e)
              }
            >
              <img
                src="/QuestList/button.png"
                className="absolute w-full aspect-[5/1]"
                draggable="false"
              />
              <p className="z-10 font-ArcadeClassic text-[#7A3E12] text-[25px]">
                SUBMIT
              </p>
            </button>
            <button
              className="relative flex w-[20%] items-center justify-center"
              onClick={handleButton}
            >
              <img
                src="/QuestList/button.png"
                className="absolute w-full aspect-[5/1]"
                draggable="false"
              />
              <p className="z-10 font-ArcadeClassic text-[#7A3E12] text-[25px]">
                VIEW QUESTS
              </p>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center bg-[#FCF7A5] gap-y-5 p-10">
          <h1 className="font-ArcadeClassic text-[#7A3E12] text-[50px]">
            QUESTS LIST
          </h1>
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
                        handleEditButton(
                          item.quest,
                          item.desc,
                          item.dl,
                          item.id
                        );
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
          <button
            className="relative flex w-[20%] items-center justify-center p-"
            onClick={() => setOpenQuestForm((prev) => !prev)}
          >
            <img
              src="/QuestList/button.png"
              className="absolute w-full aspect-[5/1]"
              draggable="false"
            />
            <p className="z-10 font-ArcadeClassic text-[#7A3E12] text-[25px]">
              CREATE QUEST
            </p>
          </button>
        </div>
      )}
    </>
  );
};

export default QuestList;
