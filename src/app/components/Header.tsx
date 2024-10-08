'use client'
import { Avatar, IconButton, Tooltip } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Characters", href: "/characters" },
  { name: "Episodes", href: "/episodes" },
  { name: "Locations", href: "/locations" },
];
const Header = () => {
  const pathname = usePathname();
  const activeLink = () => {
    return 'text-[#9DCE34] font-bold';
  }

  return (
    <header className=" bg-[#0f0f0f] h-16 items-center flex px-4 py-10 md:px-10 sticky top-0 mb-8 border-b-2 border-[#ffffff53] z-[2]">
      <Link href="/" className="flex-1">
        <Image
          src="/next_rick-n-morty/images/logo.svg"
          alt="Logo"
          width={120}
          height={40}
          className="justify-start"
        />
      </Link>
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
    </header>
  );
};
export default Header;
