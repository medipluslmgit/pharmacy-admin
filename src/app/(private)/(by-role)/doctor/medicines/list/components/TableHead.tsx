'use client';

import ClientSafe from '@/components/layout/client-safe';
import { TableHead as TH } from '@/components/ui/table';
import { Tooltip, TooltipContent } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useCallback, useEffect, useState } from 'react';
import { BiArrowToBottom, BiArrowToTop } from 'react-icons/bi';

interface TableHeadProps {
  label: string;
  orderBy: string;
}

const TableHead = ({ label, orderBy }: TableHeadProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const currentOrderBy = searchParams.get('orderBy');
  const currentOrderMode = searchParams.get('orderMode');

  const handleClick = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (currentOrderMode === 'asc') {
      params.set('orderMode', 'desc');
    } else {
      params.set('orderMode', 'asc');
    }
    params.set('orderBy', orderBy);

    router.push(pathname + '?' + params.toString());
  }, [searchParams, router, pathname, orderBy, currentOrderMode]);

  return (
    <ClientSafe>
      <TH>
        <Tooltip>
          <TooltipContent>
            <span>Ordenar por {label}</span>
          </TooltipContent>
          <TooltipTrigger>
            <div
              className="flex justify-between gap-4"
              onClick={() => handleClick()}
            >
              <span>{label}</span>

              {currentOrderBy == orderBy && currentOrderMode == 'desc' && (
                <BiArrowToBottom />
              )}

              {currentOrderBy == orderBy && currentOrderMode == 'asc' && (
                <BiArrowToTop />
              )}
            </div>
          </TooltipTrigger>
        </Tooltip>
      </TH>
    </ClientSafe>
  );
};

export default TableHead;
