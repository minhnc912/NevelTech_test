import React from "react";

type ButtonProps = {
  text: string;
  color?: string; // Màu nền (tuỳ chọn)
};

const Button: React.FC<ButtonProps> = ({ text, color = "blue" }) => {
  return (
    <button
      className={`px-3 py-2 rounded-[10px]`}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;
