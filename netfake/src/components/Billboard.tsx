import React from "react";
import useBillboard from "@/hooks/useBillboard";

const Billboard = () => {
  const { data, error, isLoading } = useBillboard();

  return (
    <div className="relative h-[56.25vw]">
      <video
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
        autoPlay
        muted
        loop
        className="w-full h-[56.25vw] object-cover brightness-50"
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-sm text-1xl md:text-5xl h-full w-[60%] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%]">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default Billboard;
