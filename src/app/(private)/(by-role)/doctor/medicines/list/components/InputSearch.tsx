'use client';

import ClientSafe from '@/components/layout/client-safe';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { LIMIT } from '../constants';

const InputSearch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const currentTerm = searchParams.get('term');
  const [value, setValue] = useState(currentTerm ?? '');
  const [debounced] = useDebounce<string>(value, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('term', debounced);
    params.set('offset', '0');
    params.set('limit', LIMIT.toString());
    params.set('orderBy', 'createdAt');
    params.set('orderMode', 'asc');
    router.push(pathname + '?' + params.toString());
  }, [debounced]);

  return (
    <ClientSafe>
      <div className="flex flex-col gap-2 text-lg">
        <Label className="text-md">Buscar</Label>
        <Input
          className="text-md"
          placeholder="Peracetamol"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </ClientSafe>
  );
};

export default InputSearch;
