import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./playButton";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";
import YouTube from "react-youtube";

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!visible);

  const { movieId } = useInfoModal();
  const { data = {} } = useMovie(movieId);
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
    },
  };

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!isVisible) {
    return null;
  }
  return (
    <div className="z-50 transition duration-300 bg-black/80 flex justify-center items-center overflow-x-hidden  fixed inset-0">
      <div className="relative w-auto h-[80%] mx-auto max-w-3xl rounded-md  ">
        <div
          className={`${
            isVisible ? "scale-100" : "scale-0"
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className="relative w-[40vw] p-10">
            <div className="w-full h-[35vh] ">
              <YouTube
                className="w-full object-cover h-full focus-visible:outline-none"
                videoId={data?.videoUrl}
                opts={opts}
              />
            </div>
            <div
              className="cursor-pointer absolute top-2 right-2 rounded-full h-6 w-6 bg-black/75 flex items-center justify-center text-white text-2xl"
              onClick={handleClose}
            >
              <AiOutlineClose className="text-white" size={20} />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex flex-row items-center gap-4 pt-8">
                <PlayButton movieId={data?.id} />
                <FavoriteButton movieId={data?.id} />
              </div>
              <div>
                <p className="text-white text-3xl pt-6">{data?.title}</p>
                <p className="text-xl text-white pt-4">{data?.description}</p>
                <div className="flex flex-row mt-4 justify-around ">
                  <p className="text-green-400 font-semibold">
                    From{" "}
                    <span className="text-white font-bold">
                      {data?.createdIn}
                    </span>
                  </p>
                  <p className="text-white font-semibold text-lg lg:text-base">
                    {" "}
                    {data?.duration}{" "}
                  </p>
                  <p>
                    <span className="text-white font-bold">{data?.genre}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
