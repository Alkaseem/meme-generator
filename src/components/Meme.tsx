import React from "react";
import { MemeState } from "../types";

export const Meme: React.FC<{ meme: MemeState }> = ({ meme }) => {
  return (
    <div className="MemeSection">
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
          border: "1px solid black",
          transform: `rotate(${meme.rotate}deg) scale(${
            meme.scale > 1 ? meme.scale / 5 : meme.scale
          })${meme.mirror ? " scaleX(-1)" : ""}`,
        }}
      >
        <img
          src={meme.imageUrl}
          alt="Meme"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 0,
            right: 0,
            textAlign: "center",
            color: meme.textColor,
            transform: "translateY(-50%)",
          }}
        >
          {meme.topText}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 0,
            right: 0,
            textAlign: "center",
            color: meme.textColor,
            transform: "translateY(50%)",
          }}
        >
          {meme.bottomText}
        </div>
      </div>
    </div>
  );
};

export default Meme;
