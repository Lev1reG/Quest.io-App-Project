"use client";

import QuestList from "@/components/QuestListMenu/QuestList.jsx";
import { useState } from "react";

export default function Home() {
  const [openQuestList, setOpenQuestList] = useState(false);
  return (
    <main className="w-screen flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-6xl">INI MAIN MENUNYA YA KING</h1>
      <p
        className="text-6xl cursor-pointer"
        onClick={() => {
          setOpenQuestList((prev) => !prev);
        }}
      >
        TOMBOL BUKA QUEST LIST
      </p>
      {openQuestList ? (
        <QuestList OpenQuestList={() => setOpenQuestList((prev) => !prev)} />
      ) : null}
    </main>
  );
}
