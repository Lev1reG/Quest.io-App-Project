"use client";

import QuestSection from "@/components/QuestMenu/QuestSection.jsx";
import QuestList from "@/components/QuestMenu/QuestList";
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
        <QuestSection
          OpenSection={() => setOpenQuestList((prev) => !prev)}
          part={<QuestList />}
        />
      ) : null}
    </main>
  );
}
