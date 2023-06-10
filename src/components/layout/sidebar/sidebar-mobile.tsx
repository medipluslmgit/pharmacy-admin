'use client';

import React, { useLayoutEffect } from 'react';
import { useSession } from 'next-auth/react';
import type { Session } from 'next-auth';

import { useSidebarMobile } from '@/hooks/use-sidebar-mobile';

import {
  CommandDialog,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import SidebarAdminOptions from './options/admin/sidebar-admin-options';
import SidebarCashierOptions from './options/cashier/sidebar-cashier-options';
import SidebarDoctorOptions from './options/doctor/sidebar-doctor-options';
import SidebarSupervidorOptions from './options/supervidor/sidebar-supervisor-options';

const sidebars = {
  admin: SidebarAdminOptions,
  supervisor: SidebarSupervidorOptions,
  cashier: SidebarCashierOptions,
  doctor: SidebarDoctorOptions,
};

interface SidebarMobileProps {
  session: Session;
}

export function SidebarMobile({ session }: SidebarMobileProps) {
  const sidebarMobile = useSidebarMobile();

  const SidebarOptions = sidebars[session.user.role];
  console.log(SidebarOptions)

  return (
    <>
      <CommandDialog
        open={sidebarMobile.isOpen}
        onOpenChange={sidebarMobile.onOpenChange}
      >
        <CommandInput placeholder="Type a command or search..." />
        <SidebarOptions />
      </CommandDialog>
    </>
  );
}
