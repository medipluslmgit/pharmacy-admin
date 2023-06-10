'use client';

import { useRouter } from 'next/navigation';
import { BiHome, BiUser } from 'react-icons/bi';

import {
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

const SidebarAdminOptions = () => {
  const router = useRouter();

  return (
    <CommandList className="h-[calc(100vh-66px)] max-h-screen overflow-x-hidden pb-4">
      <CommandEmpty>No results found.</CommandEmpty>

      <CommandGroup heading="Pricinpal">
        <CommandItem role="button" onSelect={() => router.push('/admin')}>
          <BiHome className="mr-2 h-4 w-4" />
          <span>Inicio</span>
        </CommandItem>
        <CommandItem onSelect={() => router.push('/admin')}>
          <BiHome className="mr-2 h-4 w-4" />
          <span>Ventas de hoy</span>
        </CommandItem>
      </CommandGroup>

      <CommandGroup heading="Doctores.">
        <CommandItem onSelect={() => router.push('/admin')}>
          <BiUser className="mr-2 h-4 w-4" />
          <span>Agregar doctor</span>
        </CommandItem>
      </CommandGroup>

      <CommandSeparator />
    </CommandList>
  );
};

export default SidebarAdminOptions;
