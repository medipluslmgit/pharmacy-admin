import { siteConfig } from '@/lib/site';
import { NavOptions } from '@/components/layout/navbar/navbar-options';
import { ThemeToggle } from '@/components/layout/theme-toggle';

import SidebarMobileButton from './sidebar/sidebar-mobile-button';
import { NavUserMenu } from './navbar-user-menu';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center space-x-4 px-8 sm:justify-between sm:space-x-0 md:px-4">
        <NavOptions items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
            <NavUserMenu />
            <SidebarMobileButton />
          </nav>
        </div>
      </div>
    </header>
  );
}
