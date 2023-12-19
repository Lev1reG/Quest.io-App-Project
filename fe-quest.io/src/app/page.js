"use client";
import { useState, useEffect } from "react";
import QuestSection from "@/components/QuestMenu/QuestSection.jsx";
import QuestList from "@/components/QuestMenu/QuestList";
import Loading from "@/components/Loading/Loading";

export default function Home() {
  const [openQuestList, setOpenQuestList] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [3000]);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}
