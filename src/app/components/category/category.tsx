import React from "react";

const categoryList = [
  { title: "Diamond mine", icon: "/diamond.svg" },
  { title: "VIP", icon: "/vip.svg" },
  { title: "Promotion", icon: "/promotion.svg" },
  { title: "Hot Match", icon: "/football.svg" },
  { title: "P2P Transaction", icon: "/p2p.svg" },
];

function Category() {
  return (
    <div className="px-[10px] md:px-14 xl:px-20 xxl:px-60">
      <ul className="flex gap-[10px]">
        <li className="flex lg:hidden flex-1 justify-center items-center gap-3 border border-[#FFFFFF1A] bg-primary rounded-[10px] py-4 text-center md:text-xs hover:bg-[#1A3D6F] transition duration-300 cursor-pointer">
          <img src={"/search.svg"} alt="search" width={24} height={24} />
          Search
        </li>
        {categoryList.map((category, index) => (
          <li
            key={index}
            className="hidden lg:flex flex-1 justify-center items-center gap-3 border border-[#FFFFFF1A] rounded-[10px] py-4 text-center md:text-xs hover:bg-[#1A3D6F] transition duration-300 cursor-pointer"
          >
            <img
              src={category.icon}
              alt={category.title}
              width={24}
              height={24}
            />
            {category.title}
          </li>
        ))}
        <li className="flex flex-1 justify-center items-center gap-3 border border-[#FFFFFF1A] bg-primary rounded-[10px] py-4 text-center md:text-xs hover:bg-[#1A3D6F] transition duration-300 cursor-pointer">
          <img src={"/games.svg"} alt="games" width={24} height={24} />
          Games
        </li>
        <li className="flex flex-1 justify-center items-center gap-3 border border-[#FFFFFF1A] bg-primary rounded-[10px] py-4 text-center md:text-xs hover:bg-[#1A3D6F] transition duration-300 cursor-pointer">
          <img src={"/provider.svg"} alt="provider" width={24} height={24} />
          Providers
        </li>
      </ul>
    </div>
  );
}

export default Category;
