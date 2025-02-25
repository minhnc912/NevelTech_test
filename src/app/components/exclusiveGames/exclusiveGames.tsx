"use client";

import React, { useRef, useState } from "react";

const games = [
  { id: 1, image: "/game-thumb-1.png", tag: "hot", name: "100hp gaming" },
  { id: 2, image: "/game-thumb-2.png", tag: "hot", name: "veliplay" },
  { id: 3, image: "/game-thumb-3.png", tag: "new", name: "evolution" },
  { id: 4, image: "/game-thumb-4.png", tag: "new", name: "veliplay" },
  { id: 5, image: "/game-thumb-5.png", tag: "hot", name: "onlyplay" },
  { id: 6, image: "/game-thumb-6.png", tag: "none", name: "veliplay" },
  { id: 7, image: "/game-thumb-7.png", tag: "none", name: "veliplay" },
];

const tagImages: Record<string, string> = {
  hot: "/tag-hot.svg",
  new: "/tag-new.svg",
  none: "",
};

function ExclusiveGames() {
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
        <h1 className="font-medium text-sm lg:text-3xl">Exclusive Games</h1>
        <button className="flex gap-2 items-center">
          <h1 className="hidden lg:block text-sm">SEE ALL</h1>
          <img src="/see-all.svg" alt="see-all icon" width={18} height={18} />
        </button>
      </div>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        {games.map((game) => (
          <div
            key={game.id}
            className="relative min-w-[150px] md:min-w-[200px] group"
          >
            {tagImages[game.tag] && (
              <img
                src={tagImages[game.tag]}
                alt={game.tag}
                className="absolute top-0 -left-1 w-12 h-12 z-10"
              />
            )}

            <img
              src={game.image}
              alt={`Game ${game.id}`}
              className="rounded-lg w-full h-auto"
            />
            <p className="uppercase absolute bottom-0 left-1/2 -translate-x-1/2 font-medium text-[8px]">
              {game.name}
            </p>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex flex-col items-center justify-center gap-10">
              <img src="/play.svg" alt="play icon" className="w-20" />
              <div className="hidden lg:block text-white text-lg font-semibold px-8 py-2 bg-[#b4b4b4cc] hover:bg-[#2F48D0] rounded-2xl uppercase">
                Demo
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExclusiveGames;
