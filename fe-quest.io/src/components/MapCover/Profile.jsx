import React from "react";
import Item from "./Item";

const Profile = () => {
  return (
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
        <Item
          property={{
            src: "/MapCover/profile.png",
            alt: "Profile",
            parentClass: "relative w-[51.2px] aspect-[64/81.45] mr-[24px]",
            childClass: "absolute object-contain",
          }}
        />

        <div className="font-ArcadeClassic text-[#2A1D04] text-[32px] font-normal leading-none">
          <h3 className="uppercase"> Player 1</h3>
          <div className="flex items-center ">
            <Item
              property={{
                src: "/MapCover/coin.png",
                alt: "Coin",
                parentClass: "relative w-[25.6px] aspect-square",
                childClass: "absolute object-contain",
              }}
            />

            <h3>1000</h3>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Profile;
