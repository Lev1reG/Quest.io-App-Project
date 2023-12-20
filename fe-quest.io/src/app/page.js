"use client";
import { useState, useEffect } from "react";
import QuestSection from "@/components/QuestMenu/QuestSection.jsx";
import Loading from "@/components/Loading/Loading";
import QuestMenu from "@/components/QuestMenu/QuestMenu";
import Profile from "@/components/MapCover/Profile";
import Map from "@/components/MapCover/Map";

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
        <main className="relative w-screen flex flex-col justify-center items-center min-h-screen bg-[#E0D8B3]">
          {/* Map */}
          <Map openSection={() => setOpenQuestList((prev) => !prev)} />

          {/* Profile */}
          <Profile />

          {openQuestList ? (
            <QuestSection
              OpenSection={() => setOpenQuestList((prev) => !prev)}
              part={<QuestMenu />}
            />
          ) : null}
        </main>
      )}
    </>
  );
}
