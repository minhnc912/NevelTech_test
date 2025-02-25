"use client";

import React, { useState, useCallback } from "react";
import Button from "../button";
import SocialLinks from "./socialLinks";
import FooterSection from "./footerSection";
import DownloadButtons from "./downloadButtons";
import DropdownSection from "./dropdownSection";

const dropdowns = [
  {
    title: "Games",
    items: ["Game 1", "Game 2", "Game 3", "Game 4"],
  },
  {
    title: "About",
    items: [
      "About Us",
      "Promotions",
      "VIP",
      "Help Center",
      "Awards & Certificates",
      "App",
    ],
  },
  {
    title: "Legal Information",
    items: [
      "General Terms & Conditions",
      "Responsible Gaming Policy",
      "Sports Betting Rules",
      "Privacy and Cookies Policy",
      "Payment Methods",
      "Limits",
    ],
  },
];

const Footer: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = useCallback((section: string) => {
    setOpenDropdown((prev) => (prev === section ? null : section));
  }, []);

  return (
    <div className="bg-primary py-4 px-10 lg:py-[60px] md:px-14 xl:px-20 xxl:px-60 flex flex-col lg:flex-row justify-between">
      {/* Mobile Dropdowns */}
      <div className="lg:hidden flex flex-col gap-2 w-full">
        {dropdowns.map(({ title, items }) => (
          <DropdownSection
            key={title}
            title={title}
            items={items}
            isOpen={openDropdown === title}
            onToggle={() => toggleDropdown(title)}
          />
        ))}
      </div>

      {/* Social Links (Mobile) */}
      <div className="flex justify-center lg:hidden pt-10">
        <SocialLinks />
      </div>

      {/* Help Center & Download Buttons (Mobile) */}
      <div className="lg:hidden flex flex-col gap-4 pt-10">
        <div className="flex py-[18px] px-6 justify-between bg-[#1A3157] rounded-[10px]">
          <div>
            <h2 className="font-medium text-[15px] lg:text-2xl">Help Center</h2>
            <h3 className="text-[13px] lg:text-[15px] text-[#90A2BD]">
              If you have any questions?
            </h3>
          </div>
          <Button text="GET ANSWERS" color="#3555FF" />
        </div>

        <div className="flex justify-between gap-2">
          {["android", "apple"].map((platform) => (
            <div
              key={platform}
              className="flex-1 flex py-[18px] px-6 justify-between bg-[#1A3157] rounded-[10px]"
            >
              <img src={`/${platform}.svg`} alt={`${platform} icon`} />
              <div>
                <h2 className="font-medium text-[15px] lg:text-2xl">
                  Bluechip App
                </h2>
                <h3 className="text-[13px] lg:text-[15px] text-[#90A2BD]">
                  for {platform === "android" ? "Android" : "iOS"}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex flex-col lg:flex-row justify-between w-full">
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-[15px] lg:text-2xl">Help Center</h2>
          <h3 className="text-[13px] lg:text-[15px] text-[#90A2BD]">
            If you have any questions?
          </h3>
          <Button text="GET ANSWERS" color="#3555FF" />
          <SocialLinks />
        </div>

        {dropdowns.map(({ title, items }) => (
          <FooterSection key={title} title={title} items={items} />
        ))}

        <DownloadButtons />
      </div>
    </div>
  );
};

export default Footer;
