'use client';

import ClientSafe from '@/components/layout/client-safe';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  limit: number;
  offset: number;
}

const Pagination = ({
  limit,
  offset,
  currentPage,
  totalPages,
}: PaginationProps) => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const handleNextPage = () => {
    if (currentPage >= totalPages - 1) return;
    const params = new URLSearchParams(searchParams.toString());
    const newOffset = offset + limit;
    params.set('offset', String(newOffset));
    router.push(`${path}?${params.toString()}#pagination`);
  };

  const handlePrevPage = () => {
    if (currentPage <= 0) return;
    const params = new URLSearchParams(searchParams.toString());
    const newOffset = offset - limit;
    params.set('offset', String(newOffset));
    router.push(`${path}?${params.toString()}#pagination`);
  };

  return (
    <ClientSafe>
      <div className="flex flex-row gap-4 items-center" id='pagination'>
        <Button onClick={handlePrevPage} disabled={currentPage <= 0}>
          <BiLeftArrow />
        </Button>

        <span className="text-gray-500">
          {currentPage + 1} de {totalPages}
        </span>

        <Button
          onClick={handleNextPage}
          disabled={currentPage >= totalPages - 1}
        >
          <BiRightArrow />
        </Button>
      </div>
    </ClientSafe>
  );
};

export default Pagination;
