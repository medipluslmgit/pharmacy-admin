/*
  If The path is "/" we need to redirect to apropiate page based on the user role.
  
  admin -> /admin
  supervisor -> /supervisor
  cashier -> /cashier
  doctor -> /doctor
*/

import { Navbar } from '@/components/layout/navbar/navbar';
import { Sidebar } from '@/components/layout/sidebar/sidebar';
import { SidebarMobile } from '@/components/layout/sidebar/sidebar-mobile';
import { TailwindIndicator } from '@/components/ui/tailwind-indicator';
import { ScrollArea } from '@/components/ui/scroll-area';

import { getSafeServerSession } from '@/lib/session';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function PrivateLayout({ children }: RootLayoutProps) {
  const session = await getSafeServerSession();

  return (
    <>
      <div className="relative flex flex-col ">
        <Navbar />

        <div className="flex h-5/6 flex-row overflow-hidden">
          <Sidebar session={session} />

          <ScrollArea className="h-5/6 flex-1 shadow-inner">
            {session.user.role}
            {children}
          </ScrollArea>
        </div>
      </div>

      <SidebarMobile session={session} />
      <TailwindIndicator />
    </>
  );
}
