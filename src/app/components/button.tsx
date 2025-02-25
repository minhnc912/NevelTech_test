import React from "react";

type ButtonProps = {
  text: string;
  color?: string;
};

const Button: React.FC<ButtonProps> = ({ text, color = "blue" }) => {
  return (
    <button
      className={`px-3 py-2 rounded-[10px] text-[13px] lg:text-[15px] transition duration-300 ease-in-out hover:brightness-90`}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;
