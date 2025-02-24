"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "./button";
import NavItem from "./navItem";
import MobileMenu from "./mobileMenu";

const menuList = [
  { title: "home", url: "/" },
  { title: "game", url: "/game" },
  { title: "infor", url: "/infor" },
  { title: "news", url: "/news" },
  { title: "promotions", url: "/promotions" },
  { title: "vip", url: "/vip" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-[0px_9px_35px_0px_#03193A66] py-3 px-4 md:px-14 xl:px-20 xxl:px-60 relative">
      {/* Navbar Container */}
      <div className="flex justify-between items-center">
        <div className="flex gap-14">
          <div className="flex gap-1">
            {/* Toggle Mobile Menu */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              <img
                aria-hidden
                src="/collapsed-icon.svg"
                alt="Menu icon"
                width={36}
                height={36}
              />
            </button>
            {/* Logo */}
            <Link href="/">
              <img
                aria-hidden
                src="/logo.svg"
                alt="logo"
                className="w-full md:w-16"
              />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 items-center">
            <img
              aria-hidden
              src="/search.svg"
              alt="search"
              className="cursor-pointer px-1 py-1 rounded-md transition-all duration-300 hover:bg-white/20"
            />
            <ul className="flex gap-6">
              {menuList.map((menu, index) => (
                <NavItem key={index} title={menu.title} url={menu.url} />
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-2">
          <Button text="LOGIN" color="#12294A" />
          <Button text="REGISTRATION" color="#01AF70" />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        menuList={menuList}
      />
    </nav>
  );
};

export default Navbar;
