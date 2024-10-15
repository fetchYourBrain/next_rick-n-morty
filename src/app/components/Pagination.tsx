import Link from 'next/link';
import { ApiInfo } from "@/types/ApiResponse";

interface PaginationProps {
  info: ApiInfo;
  currentPage: number;
  basePath: string;
}

export const Pagination: React.FC<PaginationProps> = ({ info, currentPage, basePath }) => {
  return (
    <div className="flex justify-center mt-4 gap-2">
      {info.prev && (
        <Link href={`${basePath}?page=${currentPage - 1}`} className="px-4 py-2 bg-green-500 text-white rounded">
          Previous
        </Link>
      )}
      <span className="px-4 py-2">
        Page {currentPage} of {info.pages}
      </span>
      {info.next && (
        <Link href={`${basePath}?page=${currentPage + 1}`} className="px-4 py-2 bg-green-500 text-white rounded">
          Next
        </Link>
      )}
    </div>
  );
};

