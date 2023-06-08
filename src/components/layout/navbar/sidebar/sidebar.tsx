'use client';

import { ScrollArea } from '@radix-ui/react-scroll-area';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { BiCalculator, BiCalendar, BiSmile, BiUser } from 'react-icons/bi';

export function Sidebar() {
  return (
    <Command
      id="carmen"
      className="hidden h-[calc(100vh-66px)] max-w-[300px] md:block shadow-md border-r"
    >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList
        data-sdsd="carmen"
        className="h-[calc(100vh-66px)] max-h-screen overflow-x-hidden pb-4"
      >
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <BiUser className="mr-2 h-4 w-4" />
            <span>Doctores afiliados</span>
          </CommandItem>
          <CommandItem>
            <BiCalendar className="mr-2 h-4 w-4" />
            <span>Empleados</span>
          </CommandItem>

          <CommandItem>
            <BiSmile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <BiCalculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />
      </CommandList>
    </Command>
  );
}
