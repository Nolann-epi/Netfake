import React, { useState } from "react";
import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

interface MovieListProps {
  data: any[];
  loading?: boolean;
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  const [index, setIndex] = useState(0); // current index of first movie to display
  const moviesToShow = data.slice(index, index + 4); // get 4 movies starting from current index

  if (isEmpty(moviesToShow)) {
    return null;
  }

  const canMoveLeft = index > 0;
  const canMoveRight = index + 4 < data.length;

  const moveLeft = () => {
    if (canMoveLeft) {
      setIndex(index - 1);
    }
  };

  const moveRight = () => {
    if (canMoveRight) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="px-4 md:px-20 mt-4 space-y-8">
      <div className="flex items-center justify-between">
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        {data.length > 4 && (
          <div className="flex space-x-4 relative top-40 left-16 z-10">
            <button
              className={`rounded-full  bg-black text-gray-900 ${
                canMoveLeft ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              onClick={moveLeft}
              disabled={!canMoveLeft}
            >
              <FaChevronCircleLeft className="text-white" size={30} />
            </button>
            <div className="relative">
              {moviesToShow.length > 3 && canMoveRight && (
                <button
                  className="absolute top-1/2 -translate-y-1/2 right-4 rounded-full bg-black text-gray-900 cursor-pointer"
                  onClick={moveRight}
                >
                  <FaChevronCircleRight className="text-white" size={30} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {moviesToShow.map((movie, i) => (
          <div key={movie.id} className={`${i === 3 ? "relative" : ""}`}>
            <MovieCard data={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
