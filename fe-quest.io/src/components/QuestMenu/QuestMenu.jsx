import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import axios from "axios";
import QuestTable from "./QuestTable";
import QuestSettings from "./QuestSettings";

const QuestMenu = () => {
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

  const updateQuest = async (id, e) => {
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
        <>
          <QuestSettings
            Edit={edit}
            ValueQuest={editQuest}
            ValueDesc={editDesc}
            ValueDL={editDl}
            ValueID={editId}
            HandleButton={handleButton}
            PostQuest={postQuest}
            UpdateQuest={updateQuest}
            HandleQuest={setEditQuest}
            HandleDesc={setEditDesc}
            HandleDL={setEditDl}
          />
        </>
      ) : (
        <>
          <QuestTable
            Quests={quests}
            FinishTask={finishTask}
            HandleEditButton={handleEditButton}
            DeleteQuest={deleteQuest}
            SetOpenQuestForm={() => setOpenQuestForm((prev) => !prev)}
          />
        </>
      )}
    </>
  );
};

export default QuestMenu;
