"use client";

import React, { useRef, useState } from "react";

const providers = [
  {
    id: 1,
    image: "/provider-logo-1.svg",
    numOfGames: "312",
    name: "Evolution",
  },
  { id: 2, image: "/provider-logo-2.svg", numOfGames: "12", name: "Spribe" },
  { id: 3, image: "/provider-logo-3.svg", numOfGames: "9", name: "VeliPlay" },
  {
    id: 4,
    image: "/provider-logo-4.svg",
    numOfGames: "36",
    name: "Turbo Games",
  },
  { id: 5, image: "/provider-logo-5.svg", numOfGames: "37", name: "SmartSoft" },
  {
    id: 7,
    image: "/provider-logo-6.svg",
    numOfGames: "7",
    name: "100HP Gaming",
  },
  { id: 8, image: "/provider-logo-7.svg", numOfGames: "166", name: "BGaming" },
  { id: 9, image: "/provider-logo-8.svg", numOfGames: "199", name: "Wazdan" },
];
function Provider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const scroll = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - scroll;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="px-4 md:px-14 xl:px-20 xxl:px-60">
      <div className="flex justify-between mb-4">
        <h1 className="font-medium text-sm lg:text-3xl">All providers</h1>
        <button className="flex gap-2 items-center">
          <h1 className="hidden lg:block text-sm">SEE ALL</h1>
          <img src="/see-all.svg" alt="see-all icon" width={18} height={18} />
        </button>
      </div>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex gap-[6px] lg:gap-3 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing xxl:p-14"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        {providers.map((provider) => (
          <div
            key={provider.id}
            className="relative min-w-[120px] lg:w-[150px] rounded-lg group bg-primary"
          >
            <div className="px-3 lg:px-8 py-4 group-hover:flex group-hover:h-full">
              <img
                src={provider.image}
                alt={`Game ${provider.id}`}
                //   className="rounded-lg w-full h-auto"
              />
            </div>

            <div className="bg-[#F5F9FF0D] px-8 lg:px-14 py-[10px] flex flex-col justify-center items-center group-hover:hidden">
              <p className="underline text-[13px] whitespace-nowrap inline-block">
                {provider.name}
              </p>
              <p className="text-[11px] text-[#90A2BD] whitespace-nowrap inline-block">
                {provider.numOfGames} Games
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Provider;
