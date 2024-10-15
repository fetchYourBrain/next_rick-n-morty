'use client';

import { Avatar, IconButton, Tooltip } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { NAVIGATION } from "@/types/Navigation";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { signOut } from "firebase/auth";
import CustomizedSwitches from '@/app/components/CustomizedSwitches';

const Header = () => {
  const [user] = useAuthState(auth);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-0.5 w-4 my-0.5 rounded-full bg-white transition ease transform duration-300`;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    sessionStorage.removeItem('user');
  };

  return (
    <header className="bg-light-bg dark:bg-dark-bg h-16 flex items-center px-4 py-10 md:px-10 sticky top-0 mb-8 border-b-2 border-light-divider dark:border-dark-divider z-[2]">
      <div className="flex-1 flex items-center md:hidden">
        <button
          className="flex flex-col h-8 w-8 border-2 border-[#1d1b1b53] dark:border-[#ffffff80] rounded justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={clsx(genericHamburgerLine, {
              "bg-[#1d1b1b53] dark:bg-[#ffffff9f] rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100": isOpen,
              "bg-[#1d1b1b53] dark:bg-[#ffffff9f] opacity-50 group-hover:opacity-100": !isOpen,
            })}
          />
          <div
            className={clsx(genericHamburgerLine, {
              "bg-[#1d1b1b53] dark:bg-[#ffffff9f] opacity-0": isOpen,
              "bg-[#1d1b1b53] dark:bg-[#ffffff9f] opacity-50 group-hover:opacity-100": !isOpen,
            })}
          />
          <div
            className={clsx(genericHamburgerLine, {
              "bg-[#1d1b1b53] dark:bg-[#ffffff9f] -rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100": isOpen,
              "bg-[#1d1b1b53] dark:bg-[#ffffff9f] opacity-50 group-hover:opacity-100": !isOpen,
            })}
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
            <li key={nav.name} className={clsx({
              'text-light-btn dark:text-dark-btn font-bold': pathname === nav.href, // активний лінк
              'text-light-text dark:text-dark-text': pathname !== nav.href  // неактивний лінк
            })}>
              <Link href={nav.href}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <CustomizedSwitches  />

      <ul className="flex items-center justify-end flex-1">
        <li>
          <Tooltip title={user ? "Logout" : "Login"}>
            <IconButton
              size="small"
              sx={{ ml: 2 }}
              aria-haspopup="true"
              onClick={user ? handleLogout : () => window.location.href = '/next_rick-n-morty/sign-in'}>
              <Avatar sx={{ width: 32, height: 32 }}>{user ? 'U' : ''}</Avatar>
            </IconButton>
          </Tooltip>
        </li>
        <ThemeButtonToggle />
      </ul>
      
      <BurgerMenu isOpen={isOpen} onClose={handleLinkClick} />
    </header>
  );
};

export default Header;

