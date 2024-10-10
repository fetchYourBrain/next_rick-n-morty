'use client';

import { NAVIGATION } from "@/types/Navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"; // Імпортуємо компонент Image

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  return (
    isOpen && (
      <div className="absolute top-20 left-0 w-full bg-[#0f0f0f] border-t-2 border-[#ffffff53] md:hidden">
        <nav>
          <ul className="flex flex-col items-center py-6">
            {NAVIGATION.map((nav) => (
              <li key={nav.name} className="py-4 flex items-center">
                {pathname === nav.href && (
                  <Image
                    src="/images/morty.svg"
                    alt="Portal Gun"
                    width={32}
                    height={32}
                    className="mr-2"
                  />
                )}
                <Link
                  href={nav.href}
                  onClick={onClose}
                  className={`${
                    pathname === nav.href ? "text-[#9DCE34]" : "text-white"
                  }`}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  );
};
