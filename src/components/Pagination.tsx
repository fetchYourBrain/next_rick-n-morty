"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import Pagination from '@mui/material/Pagination';
import { ApiInfo } from "@/types/ApiResponse";

interface PaginationProps {
  info: ApiInfo;
  basePath: string;
}

export const PaginationComponent: React.FC<PaginationProps> = ({ info, basePath }) => {
  const searchParams = useSearchParams(); 
  const router = useRouter();

  const currentPage = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('page', value.toString());
    router.push(`${basePath}?${searchParams.toString()}`);
  };

  return (
    <div className="flex justify-center mt-4 gap-2">
      <Pagination
        count={info.pages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};
