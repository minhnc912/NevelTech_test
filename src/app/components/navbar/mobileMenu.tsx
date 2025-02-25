"use client";

import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuList: { title: string; url: string }[];
}

const MobileMenu = ({ isOpen, onClose, menuList }: MobileMenuProps) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-2/5 bg-background shadow-md transition-transform duration-300 z-20 lg:hidden ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-start gap-4 py-6 px-4">
          {menuList.map((menu, index) => (
            <li
              key={index}
              className="uppercase px-1 py-1 rounded-md transition-all duration-300 hover:bg-white/20"
            >
              <Link href={menu.url} onClick={onClose}>
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
