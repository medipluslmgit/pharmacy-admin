'client side';
import { BiUser } from 'react-icons/bi';

import {
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

const SidebarDoctorOptions = () => {
  return (
    <CommandList className="h-[calc(100vh-66px)] max-h-screen overflow-x-hidden pb-4">
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Pricipal">
        <CommandItem>
          <BiUser className="mr-2 h-4 w-4" />
          <span>Inicio</span>
        </CommandItem>
      </CommandGroup>

      <CommandSeparator />
    </CommandList>
  );
};

export default SidebarDoctorOptions;
