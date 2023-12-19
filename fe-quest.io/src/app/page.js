"use client";
import { useState, useEffect } from "react";
import QuestSection from "@/components/QuestMenu/QuestSection.jsx";
import QuestList from "@/components/QuestMenu/QuestList";
import Loading from "@/components/Loading/Loading";
import Image from "next/image";

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
          <div className="absolute w-[81.77%] aspect-[1570/964] flex justify-center items-center">
            <div
              style={{
                background: "url(/MapCover/bg-Land.png)",
                backgroundSize: "contain",
              }}
              className="absolute bottom-0 left-0 w-[81.77%] aspect-[1570/964] bg-no-repeat"
            >
              <div className="absolute top-[12%] left-[12.2%] w-[70px] aspect-[100/423.28] ">
                <Image
                  onClick={() => {
                    alert("Feature is not available yet");
                  }}
                  src="/MapCover/tower.png"
                  draggable="false"
                  fill
                  alt="Tower"
                  className="absolute object-contain hover:scale-105 hover:brightness-125 transition-all duration-300 ease-in-out"
                />
              </div>
              <div
                style={{
                  background: "url(/MapCover/quote.png)",
                  backgroundSize: "contain",
                }}
                className="absolute top-[2%] left-[12%] flex justify-center items-center w-[181px] aspect-[362/176] "
              >
                <h3 className="font-PixelifySans text-black ml-2 mb-2 text-[15px] font-normal leading-normal ">
                  Still Working on it!
                </h3>
              </div>
              <div className="absolute top-[17.9%] left-[43.6%] w-[150px] aspect-square">
                <Image
                  onClick={() => {
                    setOpenQuestList((prev) => !prev);
                  }}
                  src="/MapCover/house.png"
                  draggable="false"
                  fill
                  alt="House"
                  className="absolute object-contain hover:scale-105 hover:brightness-125 transition-all duration-300 ease-in-out  "
                />
              </div>
              <div
                style={{
                  background: "url(/MapCover/quote.png)",
                  backgroundSize: "contain",
                }}
                className="absolute top-[6%] left-[50%] flex justify-center items-center w-[181px] aspect-[362/176] "
              >
                <h3 className="font-PixelifySans text-black ml-4 mb-2 text-[10px] font-normal leading-normal ">
                  Click here to add your quest!
                </h3>
              </div>
              <div className="absolute top-[0.5%] right-[0.5%] w-[167.465px] aspect-[256/193.4] ">
                <Image
                  onClick={() => {
                    alert("Feature is not available yet");
                  }}
                  src="/MapCover/trees.png"
                  draggable="false"
                  fill
                  alt="Trees"
                  className="absolute object-contain hover:scale-105 hover:brightness-125 transition-all duration-300 ease-in-out"
                />
              </div>
              <div
                style={{
                  background: "url(/MapCover/quote.png)",
                  backgroundSize: "contain",
                }}
                className="absolute -top-[10%] -right-[6%] flex justify-center items-center w-[181px] aspect-[362/176] "
              >
                <h3 className="font-PixelifySans text-black ml-4 mb-2 text-[9px] font-normal leading-normal ">
                  Click here to see your rewards!
                </h3>
              </div>
            </div>
          </div>

          {/* Profile */}
          <article
            onClick={() => {
              alert("Feature is not available yet");
            }}
            style={{
              background: "url(/MapCover/bg-profile.png)",
              backgroundSize: "contain",
            }}
            className="absolute top-[1.3%] left-[1.198%] flex justify-start items-center w-[28%] aspect-[539/130]  "
          >
            <div className="flex flex-row justify-center items-center w-[62.337%] aspect-[336/81.45] ">
              <div className="relative w-[51.2px] aspect-[64/81.45] mr-[24px] ">
                <Image
                  src="/MapCover/profile.png"
                  draggable="false"
                  fill
                  alt="Profile"
                  className="absolute object-contain"
                />
              </div>
              <div className="font-ArcadeClassic text-[#2A1D04] text-[32px] font-normal leading-none">
                <h3 className="uppercase"> Player 1</h3>
                <div className="flex items-center ">
                  <div className="relative w-[25.6px] aspect-square ">
                    <Image
                      src="/MapCover/coin.png"
                      draggable="false"
                      fill
                      alt="Profile"
                      className="absolute object-contain"
                    />
                  </div>
                  <h3>1000</h3>
                </div>
              </div>
            </div>
          </article>
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
