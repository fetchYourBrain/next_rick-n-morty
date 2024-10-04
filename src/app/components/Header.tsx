import { Avatar, IconButton, Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const NAVIGATION = [
  { name: "Home", href: "/"},
  { name: "Characters", href: "/characters" },
  { name: "Episodes", href: "/episodes" },
  { name: "Locations", href: "/locations" },
];
export const Header = () => {
  return (
    <header className=" bg-[#0f0f0f] h-16 items-center flex px-4 py-10 md:px-10 sticky top-0 mb-8 border-b-2 border-[#ffffff53]">
      <Link href='/' className="flex-1">
        <Image
          src={"img/logo.svg"}
          alt="Logo"
          width={180}
          height={40}
          className="justify-start"
        />
      </Link>
      <nav className="hidden md:flex mx-auto flex-1 justify-center">
        <ul className="flex items-center gap-6">
          {NAVIGATION.map((nav) => (
            <li key={nav.name}>
              <Link href={nav.href}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="flex items-center justify-end flex-1">
        <li>
        <Tooltip title="Login">
          <IconButton
            size="small"
            sx={{ ml: 2 }}
            aria-haspopup="true"
          >
            <Avatar sx={{ width: 32, height: 32 }}>Un</Avatar>
          </IconButton>
        </Tooltip>
        </li>
      </ul>
    </header>
  );
};
