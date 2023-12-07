import React from "react";

export const TextInput: React.FC<{
  handleChange: (key: any, value: any) => void;
  value: string | number;
  type: string;
  label: string;
  asKey: string;
}> = ({ handleChange, value, type, label, asKey }) => {
  return (
    <div
      style={{
        marginTop: "1rem",
      }}
    >
      <label>{label}</label>
      <div className="TextInputContainer">
        <input
          className="TextInput"
          type={type}
          value={value}
          onChange={(e) =>
            handleChange(
              asKey,
              typeof value === "number"
                ? Number(e.target.value)
                : e.target.value
            )
          }
        />
      </div>
    </div>
  );
};

export default TextInput;
