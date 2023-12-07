import React, { useState } from "react";

import { InputState, MemeState } from "./types";
import { Meme, TextInput } from "./components";

const App: React.FC = () => {
  const [meme, setMeme] = useState<MemeState>({
    imageUrl: "",
    topText: "",
    bottomText: "",
    textColor: "#ffffff",
    rotate: 0,
    scale: 1,
    mirror: false,
  });

  const handleChange = (
    key: keyof MemeState,
    value: string | number | boolean
  ) => {
    setMeme((prevMeme) => ({ ...prevMeme, [key]: value }));
  };

  const Inputs: InputState[] = [
    { label: "Image URL", value: meme.imageUrl, type: "text", key: "imageUrl" },
    { label: "Top Text", value: meme.topText, type: "text", key: "topText" },
    {
      label: "Bottom Text",
      value: meme.bottomText,
      type: "text",
      key: "bottomText",
    },
    { label: "Rotate", value: meme.rotate, type: "number", key: "rotate" },
    { label: "Scale", value: meme.scale, type: "number", key: "scale" },
  ];

  return (
    <div className="Container">
      <div className="InputsSection">
        <h1>Meme Generator</h1>
        <div>
          {Inputs.map(({ label, value, type, key }) => (
            <TextInput
              asKey={key}
              type={type}
              value={value}
              handleChange={handleChange}
              label={label}
            />
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div>
            <TextInput
              asKey="textColor"
              type="color"
              value={meme.textColor}
              handleChange={handleChange}
              label="Text Color"
            />
          </div>
          <div>
            <label>
              Mirror:
              <input
                type="checkbox"
                checked={meme.mirror}
                onChange={(e) => handleChange("mirror", e.target.checked)}
              />
            </label>
          </div>
        </div>
      </div>
      <Meme meme={meme} />
    </div>
  );
};

export default App;
