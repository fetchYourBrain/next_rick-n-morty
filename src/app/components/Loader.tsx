"use client";

import Player from "lottie-react";
import animation from "../../../public/animation/LoaderAnimation.json";

export const Loader = () => {
  return (
    <div className="flex min-w-full justify-center items-center min-h-screen absolute bg-black/30 backdrop-blur-sm">
      <div className="w-[275px] h-[275px] rounded-full bg-[#9DCE34] overflow-hidden flex justify-center items-center">
        <Player
          autoplay
          loop
          animationData={animation}
          style={{ height: "200px", width: "300px" }}
        />
      </div>
    </div>
  );
};
