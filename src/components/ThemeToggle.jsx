"use client";

import { useTheme } from "next-themes";

export const ThemeButtonToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div>
      <button
        className="text-light-text dark:text-dark-text border border-red-600"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        Change
      </button>
    </div>
  );
};

// {resolvedTheme === "dark" ? "light" : "dark"}
