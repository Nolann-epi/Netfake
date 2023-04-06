import React from "react";
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data } = useMovie(movieId as string);
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
    },
  };

  return (
    <div className="h-full w-screen">
      <nav className="fixed h-20 w-full p-4 z-10 flex flex-row text-center gap-8 bg-black ">
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          className="text-white cursor-pointer"
          size={35}
        />
        <p className="text-white text-1xl md:text-3xl font-bold bg-black">
          <span className="font-light">Watching: </span>
          {data?.title}
        </p>
      </nav>
      <YouTube className="w-full h-full" videoId={data?.videoUrl} opts={opts} />
    </div>
  );
};

export default Watch;
