import React from "react";

const categoryList = [
  { title: "Diamond mine", icon: "/diamond.svg" },
  { title: "VIP", icon: "/diamond.svg" },
  { title: "Promotion", icon: "/diamond.svg" },
  { title: "Hot Match", icon: "/diamond.svg" },
  { title: "P2P Transaction", icon: "/diamond.svg" },
];
function Category() {
  return (
    <div className="px-[10px] md:px-14 xl:px-20 xxl:px-60 pt-10">
      <ul className="flex gap-[10px]">
        <li className="flex lg:hidden flex-1 justify-center gap-3 border border-[#FFFFFF1A] bg-[#12294A] rounded-[10px] py-4 text-center">
          <img
            src={"/diamond.svg"}
            alt={"/diamond.svg"}
            width={24}
            height={24}
          />
          Search
        </li>
        {categoryList.map((category) => (
          <li className="hidden lg:flex flex-1 justify-center gap-3 border border-[#FFFFFF1A] rounded-[10px] py-4 text-center">
            <img
              src={category.icon}
              alt={category.title}
              width={24}
              height={24}
            />
            {category.title}
          </li>
        ))}
        <li className="flex flex-1 justify-center gap-3 border border-[#FFFFFF1A] bg-[#12294A] rounded-[10px] py-4 text-center">
          <img
            src={"/diamond.svg"}
            alt={"/diamond.svg"}
            width={24}
            height={24}
          />
          Games
        </li>
        <li className="flex flex-1 justify-center gap-3 border border-[#FFFFFF1A] bg-[#12294A] rounded-[10px] py-4 text-center">
          <img
            src={"/diamond.svg"}
            alt={"/diamond.svg"}
            width={24}
            height={24}
          />
          Providers
        </li>
      </ul>
    </div>
  );
}

export default Category;
