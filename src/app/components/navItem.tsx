"use client";

import Link from "next/link";

interface NavItemProps {
  title: string;
  url: string;
}

const NavItem = ({ title, url }: NavItemProps) => {
  return (
    <li className="uppercase px-1 py-1 rounded-md transition-all duration-300 hover:bg-white/20">
      <Link href={url}>{title}</Link>
    </li>
  );
};

export default NavItem;
