import React from "react";

const socialLinks = [
  { src: "/telegram.svg", alt: "telegram" },
  { src: "/facebook.svg", alt: "facebook" },
  { src: "/instagram.svg", alt: "instagram" },
  { src: "/twitter.svg", alt: "twitter" },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="block lg:hidden font-medium">Follow Us</p>
      <ul className="w-full flex justify-between pt-6 lg:pt-10">
        {socialLinks.map((link, index) => (
          <li className="cursor-pointer" key={index}>
            <img src={link.src} alt={link.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
