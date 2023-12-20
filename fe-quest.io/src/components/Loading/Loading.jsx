import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <section className="flex flex-col h-screen w-screen items-center justify-center bg-[#E0D8B3] ">
      {" "}
      <h1 className="font-PixelifySans text-center text-black 2xl:text-[80px] xl:text-[66.4px] lg:text-[53.6px] md:text-[40px] sm:text-[26.66666667px] font-normal leading-normal">
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
