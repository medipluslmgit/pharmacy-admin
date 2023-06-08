'use client';

import { signOut } from 'next-auth/react';

import { useRouter } from 'next/navigation';

import { DropdownMenuItem, DropdownMenuLabel } from '../../ui/dropdown-menu';

const NavUserMenuIPublicItems = () => {
  const router = useRouter();
  return (
    <>
      <DropdownMenuItem onClick={() => router.push('/profile')}>
        <DropdownMenuLabel>Perfil</DropdownMenuLabel>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => signOut()}>
        <DropdownMenuLabel>Cerrar sesión</DropdownMenuLabel>
      </DropdownMenuItem>
    </>
  );
};

export default NavUserMenuIPublicItems;
