'use client';

import { useSidebarMobile } from '@/hooks/use-sidebar-mobile';

import { Button } from '../../ui/button';
import { BiMenu } from 'react-icons/bi';

const SidebarMobileButton = () => {
  const sidebarMobile = useSidebarMobile();

  return (
    <div>
      <Button className="md:hidden ml-2" onClick={sidebarMobile.onOpen}>
        <BiMenu />
      </Button>
    </div>
  );
};

export default SidebarMobileButton;
