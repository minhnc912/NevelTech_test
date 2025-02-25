"use client";
import { useState } from "react";

interface BannerMobileProps {
  banners: BannerProps[];
}

interface BannerProps {
  id: number;
  image: string;
  title: string;
  text: string[];
  subText: string[];
  buttonText: string;
  overlayImage: string;
}

const BannerMobile = ({ banners }: BannerMobileProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center md:hidden w-full px-6 pt-3 gap-3 relative">
      {banners[2].overlayImage && (
        <img
          className="absolute -top-[7%] z-10"
          src="/icon-banner-mobile.png"
          alt="Icon"
        />
      )}
      <div className="h-[90%] flex justify-center rounded-2xl overflow-hidden lg:shadow-lg relative">
        <button className="absolute top-2 right-3 z-10">
          <img src="/infor.svg" alt="info icon" />
        </button>
        <img
          src="/banner-mobile.png"
          alt="Mobile Banner"
          className="w-full max-w-[350px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white text-center pt-20 py-6 px-4">
          <div className="bg-[#FFFFFF1A] rounded-[80px] font-semibold text-xs px-4 py-1">
            CashBack
          </div>
          <h2 className="text-xl font-extrabold pb-2">
            Piggy Christmas Tap: <br /> €35,000 For Your Win
          </h2>
          <button className="bg-[#FF0960] uppercase font-semibold text-sm px-20 py-3 rounded-[10px]">
            Discover More
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        {banners.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerMobile;
