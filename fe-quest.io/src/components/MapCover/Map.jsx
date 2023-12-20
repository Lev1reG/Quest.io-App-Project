import React from "react";
import ItemList from "./ItemList";

const Map = ({ openSection }) => {
  return (
    <div className="absolute h-[89.26vh] aspect-[1570/964] flex justify-center items-center">
      <div
        style={{
          background: "url(/MapCover/bg-Land.png)",
          backgroundSize: "contain",
        }}
        className="absolute bottom-0 left-0 w-[81.77%] aspect-[1570/964] bg-no-repeat"
      >
        <ItemList
          parentClass="absolute top-0 left-0 w-[171px] aspect-[195/375]"
          itemProperty={{
            onClick: () => {
              alert("Feature is not available yet");
            },
            src: "/MapCover/tower.png",
            alt: "Tower",
            parentClass:
              "absolute bottom-0 right-0 w-[63px] aspect-[100/423.28] ",
            childClass:
              "absolute object-contain hover:scale-105 hover:brightness-125 transition-all duration-300 ease-in-out",
          }}
          quoteProperty={{
            parentClass:
              "absolute top-[2%] -right-[55%] flex justify-center items-center w-[181px] aspect-[362/176]",
            childClass:
              "font-PixelifySans max-w-[140px] h-fit text-black ml-4 mb-2 text-[15px] font-normal leading-none",
            text: "Still Working on it!",
          }}
        />
        <ItemList
          parentClass="absolute top-[4.7%] left-[43%] w-[245px] aspect-[410/365]"
          itemProperty={{
            onClick: openSection,
            src: "/MapCover/house.png",
            alt: "House",
            parentClass: "absolute bottom-0 left-0 w-[150px] aspect-square ",
            childClass:
              "absolute object-contain scale-105 hover:scale-110  hover:brightness-125 transition-all duration-300 ease-in-out",
          }}
          quoteProperty={{
            parentClass:
              "absolute top-0 right-0 flex justify-center items-center w-[181px] aspect-[362/176]",
            childClass:
              "font-PixelifySans max-w-[140px] h-fit text-black ml-5 mb-2 text-[15px] font-normal leading-none",
            text: "Click here to add your quest!",
          }}
        />

        <ItemList
          parentClass="absolute top-0 right-0 w-[250px] aspect-[384/329]"
          itemProperty={{
            onClick: () => {
              alert("Feature is not available yet");
            },
            src: "/MapCover/AngelFigure.png",
            alt: "Statue",
            parentClass:
              "absolute top-[20%] right-[33%] w-[114.8px] aspect-[164/153]",
            childClass:
              "absolute object-contain hover:scale-105 hover:brightness-125 transition-all duration-300 ease-in-out",
          }}
          quoteProperty={{
            parentClass:
              "absolute -top-[30%] -right-[15%] flex justify-center items-center w-[181px] aspect-[362/176] ",
            childClass:
              "font-PixelifySans max-w-[140px] h-fit text-black ml-5 mb-2 text-[15px] font-normal leading-none ",
            text: "Click here to see your rewards!",
          }}
        />
      </div>
    </div>
  );
};

export default Map;
