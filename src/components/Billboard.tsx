import React, { useCallback } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import YouTube from "react-youtube";

import useBillboard from "@/hooks/useBillboard";
import PlayButton from "./playButton";
import useInfoModal from "@/hooks/useInfoModal";

const opts = {
  height: "100%",
  width: "100%",
  playerVars: {
    autoplay: 1,
    mute: 1,
  },
};

const Billboard: React.FC = () => {
  const { data } = useBillboard();
  const { openModal } = useInfoModal();

  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [data?.id, openModal]);

  return (
    <div className="relative h-[50.25vw] w-full md:px-10 pt-12">
      {data?.youtube ? (
        <YouTube
          className="w-full h-[50.25vw] object-cover brightness-[60%] transition duration-500 border-slate-900 focus-visible:outline-none"
          videoId={data?.videoUrl}
          opts={opts}
        />
      ) : (
        <video
          poster={data?.thumbnailUrl}
          className="w-full h-[50.25vw] object-cover brightness-[60%] transition duration-500"
          autoPlay
          muted
          loop
          src={data?.videoUrl}
        ></video>
      )}
      <div className="absolute top-[40%] md:top-[30%] lg:top-[40%] ml-4 md:ml-8 lg:ml-16 w-[50%]">
        <p className="text-white text-2xl md:text-2xl lg:text-4xl h-full w-[70%]  font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white md:flex hidden min-h-[50px] text-[8px] text-base md:text-base lg:text-2xl mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-fit drop-shadow-xl overflow-hidden">
          {data?.description}
        </p>
        <div className="md:flex flex-row items-center mt-3 md:mt-4 gap-3 hidden">
          <PlayButton movieId={data?.id} />
          <button
            onClick={handleOpenModal}
            className="
            bg-white
            text-white
              bg-opacity-30 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
          >
            <AiOutlineInfoCircle className=" mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default Billboard;
