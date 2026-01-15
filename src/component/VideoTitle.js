import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute inset-0 z-20 px-24 pt-[12%] text-white pointer-events-none bg-gradient-to-r from-gray">
      <h1 className="text-4xl font-bold">{title}</h1>

      <p className="mt-4 w-1/4">
        {overview}
      </p>

      <div className="mt-4 flex pointer-events-auto">
        <button className="w-20 bg-white text-black py-2 px-4 rounded hover:bg-gray-300">
          ▶ Play
        </button>

        <button className="ml-4 bg-white text-black py-2 px-4 rounded hover:bg-gray-300">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
