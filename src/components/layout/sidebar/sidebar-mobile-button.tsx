'use client';

import { useSidebarMobile } from '@/hooks/use-sidebar-mobile';

import { Button } from '../../ui/button';
import { BiMenu } from 'react-icons/bi';

const SidebarMobileButton = () => {
  const sidebarMobile = useSidebarMobile();

  return (
    <Button className="md:hidden" onClick={sidebarMobile.onOpen}>
      <BiMenu />
    </Button>
  );
};

export default SidebarMobileButton;
