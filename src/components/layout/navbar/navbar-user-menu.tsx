import { getServerSession } from 'next-auth';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import NavUserMenuIPrivateItems from './navbar-user-menu-private';
import NavUserMenuIPublicItems from './navbar-user-menu-public';

import { FaUserAlt } from 'react-icons/fa';

export async function NavUserMenu() {
  const session = await getServerSession(authOptions);

  let menuOptions = <NavUserMenuIPrivateItems />;

  if (session?.user) {
    menuOptions = <NavUserMenuIPublicItems />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={session?.user?.image || ''}
              alt={session?.user?.name || ''}
            />
            <AvatarFallback>
              <FaUserAlt />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>{session?.user.name}</DropdownMenuLabel>
        <DropdownMenuGroup>{menuOptions}</DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
