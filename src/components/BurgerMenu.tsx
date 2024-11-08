'use client';

import { NAVIGATION } from "@/constants/Navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  return (
    isOpen && (
      <div className="absolute top-20 left-0 w-full bg-[#e0f7faa1] h-[100vh] dark:bg-[#000000b6] border-[1px] backdrop-blur-lg border-t-2 border-[#ffffff53] md:hidden">
        <nav>
          <ul className="flex flex-col items-center py-6">
            {NAVIGATION.map((nav) => (
              <li key={nav.name} className="py-4 flex items-center">
                <Link
                  href={nav.href}
                  onClick={onClose}
                  className={clsx('flex items-center text-black dark:text-white', {
                    'text-light-primary dark:text-dark-primary font-bold': pathname === nav.href,
                  })}
                >
                  {nav.name}
                  {pathname === nav.href && (
                    <Image
                      src="/next_rick-n-morty/images/morty.svg"
                      alt="Morty"
                      width={32}
                      height={32}
                      className="ml-2"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  );
};


