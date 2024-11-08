'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { searchCharacters, searchEpisodes, searchLocations } from '@/services/query';
import { SearchResult } from '@/types/SearchResults';

const TopBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState<string>(''); 
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    handleSearch(value);
  };

  const handleSearch = async (query: string) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    let results: SearchResult[] = [];
    
    if (pathname.includes('/characters')) {
      results = await searchCharacters(query);
    } else if (pathname.includes('/episodes')) {
      results = await searchEpisodes(query);
    } else if (pathname.includes('/locations')) {
      results = await searchLocations(query);
    }

    setSearchResults(results);
  };

  const handleResultClick = (result: SearchResult) => {
    if ('id' in result) {
      const route = pathname.includes('/characters') ? `/characters/${result.id}`
                    : pathname.includes('/episodes') ? `/episodes/${result.id}`
                    : `/locations/${result.id}`;
      router.push(route);
    }
  };

  useEffect(() => {
    setSearchValue('');
    setSearchResults([]);
  }, [pathname]);

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between gap-3 bg-[#ffffff] dark:bg-[#262626] py-4 px-2 mb-10 relative">
      <div className="flex gap-2 w-full md:w-96">
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Find what you're looking for!"
          className="rounded-sm bg-transparent py-2 px-4 text-light-primary dark:text-dark-primary border-[#00A7E4] dark:border-dark-primary border-[2px] flex-1"
        />
      </div>

      {searchResults.length > 0 && (
        <div className="absolute z-[2] left-0 top-full mt-2 bg-[#ffffff] dark:bg-[#262626] p-2 border-[#00A7E4] dark:border-dark-primary border-[2px] rounded-sm w-full">
          {searchResults.map((result) => (
            <div 
              key={result.id} 
              className="py-2 cursor-pointer hover:text-[#00A7E4] dark:hover:text-dark-primary" 
              onClick={() => handleResultClick(result)}
            >
              {result.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopBar;
