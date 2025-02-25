import React from "react";
import Image from "next/image";
import BannerMobile from "./bannerMobile";

const banners = [
  {
    id: 1,
    image: "/banner1.png",
    title: "Exclusive Tournament",
    text: ["Piggy Christmas Tap:", "€35,000 For Your", "Wins"],
    subText: [],
    buttonText: "JOIN AND WIN",
    overlayImage: "/icon-banner1.png",
  },
  {
    id: 2,
    image: "/banner2.png",
    title: "CashBack",
    text: ["Win or Get Back up", "to €100"],
    subText: [
      "See your best cashback offers for Slots, Live Games, and",
      "Crash Games. Play and get your money back daily!",
    ],
    buttonText: "Discover More",
    overlayImage: "/icon-banner3.png",
  },
  {
    id: 3,
    image: "/banner3.png",
    title: "CashBack",
    text: ["Win or Get Back up to €100"],
    subText: [
      "See your best cashback offers for Slots, Live Games, and",
      "Crash Games. Play and get your money back daily!",
    ],
    buttonText: "Discover More",
    overlayImage: "/icon-banner3.png",
  },
];

const Banner = () => {
  return (
    <div className="relative pt-6 w-full flex justify-center overflow-hidden">
      <div className="hidden md:flex w-full justify-center items-center gap-5 relative">
        {/* Prev Slide */}
        <div className="min-w-[60vw] h-[300px] absolute transition-all duration-500 opacity-50 scale-90 left-[-40%] rounded-2xl overflow-hidden">
          <Image
            src={banners[2].image}
            alt="Banner"
            layout="fill"
            objectFit="cover"
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-center p-5 px-10">
            <button className="absolute top-2 right-3 z-10">
              <img src="/infor.svg" alt="infor icon" />
            </button>
            <div className="w-1/2 flex flex-col items-center gap-4">
              <div className="bg-[#FFFFFF1A] rounded-[80px] font-semibold text-lg md:text-xl xl:text-2xl xxl:text-3xl px-4 py-1">
                {banners[2].title}
              </div>
              <div>
                {banners[2].text.map((line, index) => (
                  <h2
                    className="text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold"
                    key={index}
                  >
                    {line}
                  </h2>
                ))}
              </div>

              <button className="bg-[#FF0960] uppercase font-semibold text-xs md:text-sm lg:text-base xl:text-lg px-6 md:px-10 lg:px-12 xl:px-16 py-2 md:py-3 xl:py-4 rounded-[10px]">
                {banners[2].buttonText}
              </button>
              {banners[2].subText && (
                <p className="text-lg mt-2">{banners[2].subText}</p>
              )}
            </div>
            <div className="w-1/2 flex justify-end">
              {banners[2].overlayImage && (
                <img src={banners[2].overlayImage} alt="Icon" width="60%" />
              )}
            </div>
          </div>
        </div>

        {/* Current Slide */}
        <div className="w-[60vw] min-h-[300px] transition-all duration-500 scale-100 opacity-100 z-10 rounded-2xl overflow-hidden relative">
          <Image
            src={banners[0].image}
            alt="Current Banner"
            layout="fill"
            objectFit="cover"
          />

          {/* Overlay content */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-center p-5 px-10">
            <button className="absolute top-2 right-3 z-10">
              <img src="/infor.svg" alt="infor icon" />
            </button>
            <div className="w-1/2 flex flex-col items-center gap-4">
              <div className="bg-[#FFFFFF1A] rounded-[80px] font-semibold text-lg md:text-xl xl:text-2xl xxl:text-3xl px-4 py-1">
                {banners[0].title}
              </div>

              <div>
                {banners[0].text.map((line, index) => (
                  <h2
                    className="text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold"
                    key={index}
                  >
                    {line}
                  </h2>
                ))}
              </div>

              <button className="bg-[#FF0960] uppercase font-semibold text-xs md:text-sm lg:text-base xl:text-lg px-6 md:px-10 lg:px-12 xl:px-16 py-2 md:py-3 xl:py-4 rounded-[10px]">
                {banners[0].buttonText}
              </button>

              {banners[0].subText && (
                <p className="text-lg mt-2">{banners[0].subText}</p>
              )}
            </div>
            <div className="w-1/2 flex justify-center">
              {banners[0].overlayImage && (
                <img src={banners[0].overlayImage} alt="Icon" />
              )}
            </div>
          </div>
        </div>

        {/* Next Slide */}
        <div className="w-[60vw] min-h-[300px] absolute transition-all duration-500 opacity-50 scale-90 right-[-40%] rounded-2xl overflow-hidden">
          <Image
            src={banners[1].image}
            alt="Current Banner"
            layout="fill"
            objectFit="cover"
          />

          {/* Overlay content */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-center py-12 px-10">
            <button className="absolute top-2 right-3 z-10">
              <img src="/infor.svg" alt="infor icon" />
            </button>
            <div className="w-1/2 flex flex-col items-center">
              <div className="bg-[#FFFFFF1A] rounded-[80px] font-semibold text-lg md:text-xl xl:text-2xl xxl:text-3xl px-4 py-1">
                {banners[1].title}
              </div>
              <div>
                {banners[1].text.map((line, index) => (
                  <h2
                    className="text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold"
                    key={index}
                  >
                    {line}
                  </h2>
                ))}
              </div>

              <button className="bg-[#FF0960] uppercase font-semibold text-xs md:text-sm lg:text-base xl:text-lg px-6 md:px-10 lg:px-12 xl:px-16 py-2 md:py-3 xl:py-4 rounded-[10px]">
                {banners[1].buttonText}
              </button>
              {banners[1].subText && (
                <div>
                  {banners[1].subText.map((line, index) => (
                    <div className="text-sm mt-2" key={index}>
                      {line}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="w-1/2 flex justify-center">
              {banners[1].overlayImage && (
                <img src={banners[1].overlayImage} alt="Icon" />
              )}
            </div>
          </div>
        </div>
      </div>

      <BannerMobile banners={banners} />
    </div>
  );
};

export default Banner;
