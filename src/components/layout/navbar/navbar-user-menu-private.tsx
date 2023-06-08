
import Link from 'next/link';
import { DropdownMenuItem, DropdownMenuLabel } from '../../ui/dropdown-menu';

const NavUserMenuIPrivateItems = () => {
  return (
    <DropdownMenuItem>
      <Link href="/login">
        <DropdownMenuLabel>Iniciar sesión</DropdownMenuLabel>
      </Link>
    </DropdownMenuItem>
  );
};

export default NavUserMenuIPrivateItems;
