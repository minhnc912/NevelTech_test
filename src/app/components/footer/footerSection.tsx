import React from "react";

type FooterSectionProps = {
  title: string;
  items: string[];
};

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
  return (
    <div className="flex gap-5 flex-col text-[15px]">
      <h1>{title}</h1>
      {items.map((item, index) => (
        <p
          className="text-[#90A2BD] text-[15px] hover:text-white cursor-pointer"
          key={index}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default FooterSection;
