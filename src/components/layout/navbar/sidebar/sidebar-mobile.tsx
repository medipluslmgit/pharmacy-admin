'use client';

import * as React from 'react';
import { DialogContent } from '@radix-ui/react-dialog';
import {
  BiCalculator,
  BiCalendar,
  BiCreditCard,
  BiSmile,
  BiUser,
} from 'react-icons/bi';

import { useSidebarMobile } from '@/hooks/use-sidebar-mobile';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';

export function SidebarMobile() {
  const sidebarMobile = useSidebarMobile();

  return (
    <>
      <CommandDialog
        open={sidebarMobile.isOpen}
        onOpenChange={sidebarMobile.onOpenChange}
        key="sidebar-mobile"
      >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="max-h-[calc(100vh-66px)]">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <BiCalendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
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
          <CommandGroup heading="Settings">
            <CommandItem>
              <BiUser className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <BiCreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </CommandDialog>
    </>
  );
}
