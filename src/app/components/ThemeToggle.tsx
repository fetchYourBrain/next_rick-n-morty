"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export const ThemeButtonToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div>
      <button
        className="text-light-text dark:text-dark-text"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? (
          <div className="relative w-full h-64 bg-transparent">
            <Image
              src="/next_rick-n-morty/images/light-logo.webp"
              alt="Logo"
              width={48}
              height={48}
              quality={100}
              className=" object-cover"
            />
          </div>
        ) : (
          <div className="bg-inherit">
            <Image
              src="/next_rick-n-morty/images/dark-logo.jpg"
              alt="Logo"
              width={48}
              height={48}
              quality={100}
              className="justify-center"
            />
          </div>
        )}
      </button>
    </div>
  );
};

// {resolvedTheme === "dark" ? "light" : "dark"}
