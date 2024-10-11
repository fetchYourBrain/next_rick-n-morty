'use client';

import { Avatar, IconButton, Tooltip } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { NAVIGATION } from "@/types/Navigation";


const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-0.5 w-4 my-0.5 rounded-full bg-white transition ease transform duration-300`;
  const activeLink = () => {
    return 'text-[#9DCE34] font-bold';
  }

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-[#0f0f0f] h-16 flex items-center px-4 py-10 md:px-10 sticky top-0 mb-8 border-b-2 border-[#ffffff53] z-[2]">
      <div className="flex-1 flex items-center md:hidden">
        <button
          className="flex flex-col h-8 w-8 border-2 border-[#ffffff53] rounded justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={clsx(
              genericHamburgerLine,
              isOpen
                ? "rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            )}
          />
          <div
            className={clsx(
              genericHamburgerLine,
              isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            )}
          />
          <div
            className={clsx(
              genericHamburgerLine,
              isOpen
                ? "-rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            )}
          />
        </button>
      </div>


      <div className="flex-1 flex justify-center md:justify-start">
        <Link href="/" className="flex-1">
          <Image
            src="/next_rick-n-morty/images/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            className="justify-start"
          />
        </Link>
      </div>

      <nav className="hidden md:flex mx-auto flex-1 justify-center">
        <ul className="flex items-center gap-6">
          {NAVIGATION.map((nav) => (
            <li key={nav.name} className={clsx({[activeLink()]: pathname === nav.href})}>
              <Link href={nav.href}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="flex items-center justify-end flex-1">
        <li>
          <Tooltip title="Login">
            <IconButton size="small" sx={{ ml: 2 }} aria-haspopup="true">
              <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
            </IconButton>
          </Tooltip>
        </li>
      </ul>

      <BurgerMenu isOpen={isOpen} onClose={handleLinkClick} />
    </header>
  );
};

export default Header;
