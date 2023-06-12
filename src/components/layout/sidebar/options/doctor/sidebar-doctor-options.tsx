'client side';
import { BiUser } from 'react-icons/bi';

import {
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import Link from 'next/link';

const SidebarDoctorOptions = () => {
  return (
    <CommandList className="h-[calc(100vh-66px)] max-h-screen overflow-x-hidden pb-4">
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Pricipal">
        <Link href="/doctor">
          <CommandItem>
            <BiUser className="mr-2 h-4 w-4" />
            <span>Inicio</span>
          </CommandItem>
        </Link>
      </CommandGroup>

      <CommandGroup heading="Medicamentos">
        <Link href="/doctor/medicines/list">
          <CommandItem>
            <BiUser className="mr-2 h-4 w-4" />
            <span>Medicamentos</span>
          </CommandItem>
        </Link>
      </CommandGroup>

      <CommandSeparator />
    </CommandList>
  );
};

export default SidebarDoctorOptions;
