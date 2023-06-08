/*
  If The path is "/" we need to redirect to apropiate page based on the user role.
  
  admin -> /admin
  supervisor -> /supervisor
  cashier -> /cashier
  doctor -> /doctor
*/



import { Navbar } from '@/components/layout/navbar/navbar';
import { Sidebar } from '@/components/layout/navbar/sidebar/sidebar';
import { SidebarMobile } from '@/components/layout/navbar/sidebar/sidebar-mobile';
import { TailwindIndicator } from '@/components/ui/tailwind-indicator';
import { ScrollArea } from '@/components/ui/scroll-area';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function PrivateLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="relative flex flex-col ">
        <Navbar />

        <div className="flex h-5/6 flex-row overflow-hidden">
          <Sidebar />

          <ScrollArea className="h-5/6 flex-1 shadow-inner">
            {children}
          </ScrollArea>
        </div>
      </div>

      <SidebarMobile />
      <TailwindIndicator />
    </>
  );
}
