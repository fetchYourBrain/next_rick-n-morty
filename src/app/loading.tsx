"use client";

import  Player from "lottie-react";
import animation from "../../public/animation/LoaderAnimation.json";
import { createPortal } from "react-dom";

const Loading = () => {

  return createPortal(
    <div className="flex min-w-full justify-center items-center min-h-screen absolute bg-black/30 backdrop-blur-sm">
      <div className="w-[275px] h-[275px] rounded-full flex justify-center items-center relative">
        <div className="w-[250px] h-[250px] absolute z-0 bg-[url('/next_rick-n-morty/images/portal.png')] bg-center bg-no-repeat bg-cover animate-spin-slow"></div>
        <div className="relative z-[3]">
          <Player
            autoplay
            loop
            animationData={animation}
            style={{ height: "200px", width: "300px" }}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};
export default Loading;
