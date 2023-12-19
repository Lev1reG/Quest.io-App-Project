import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <section className="flex flex-col h-screen w-screen items-center justify-center bg-[#E0D8B3] ">
      <h1 className="font-PixelifySans text-center text-black text-[80px] font-normal leading-normal">
        LOADING...
      </h1>
      <div className="relative w-[10.4167%] aspect-[200/110] ">
        <Image
          src="/gif/loading-animation.gif"
          draggable="false"
          fill
          alt="loading animation"
          className="absolute object-contain"
        />
      </div>
    </section>
  );
};

export default Loading;
