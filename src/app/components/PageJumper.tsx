'use client';

import React, { useState, KeyboardEvent, useEffect } from 'react';
import Link from 'next/link';
import { ApiInfo } from "@/types/ApiResponse";

interface PageJumperProps {
  info: ApiInfo;
  currentPage: number;
  basePath: string;
}

export const PageJumper: React.FC<PageJumperProps> = ({ info, basePath, currentPage }) => {
  const [inputPage, setInputPage] = useState(currentPage.toString());

  useEffect(() => {
    setInputPage(currentPage.toString());
  }, [currentPage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 1 && Number(value) <= info.pages)) {
      setInputPage(value);
    }
  };

  const getJumpLink = () => {
    const page = Number(inputPage);
    if (page >= 1 && page <= info.pages) {
      return `${basePath}?page=${page}`;
    }
    return basePath;
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const link = document.getElementById('jump-link') as HTMLAnchorElement;
      if (link) link.click();
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <span className="mr-2">Page</span>
      <input
        type="text"
        value={inputPage}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        className="w-16 text-center border border-gray-300 rounded px-2 py-1"
      />
      <span className="mx-2">of {info.pages}</span>
      <Link href={getJumpLink()} id="jump-link" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Jump
      </Link>
    </div>
  );
};
