import React from "react";
import Stack from "@mui/material/Stack";
import Link from "next/link";

interface Props {
  text: string;
}

export const MainButton: React.FC<Props> = ({ text }) => {
  return (
    <Stack spacing={2} direction="row">
      <button
        className="
        w-[200px]
        h-[50px]
          px-4 py-2 
          bg-light-btn text-light-text 
          dark:bg-dark-btn dark:text-dark-text
          rounded 
          transition-all 
          hover:bg-light-bg hover:text-light-primary 
          dark:hover:bg-dark-bg dark:hover:text-dark-primary
        "
      >
        <Link
          target="_blank"
          className="cursor-custom-pointer         text-l"
          href="https://github.com/fetchYourBrain/next_rick-n-morty/blob/main/README.md"
        >
          {text}
        </Link>
      </button>
    </Stack>
  );
};
