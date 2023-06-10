import { Command, CommandInput } from '@/components/ui/command';
import SidebarAdminOptions from './options/admin/sidebar-admin-options';
import SidebarSupervidorOptions from './options/supervidor/sidebar-supervisor-options';
import SidebarCashierOptions from './options/cashier/sidebar-cashier-options';
import SidebarDoctorOptions from './options/doctor/sidebar-doctor-options';
import { Session } from 'next-auth';

const sidebars = {
  admin: <SidebarAdminOptions />,
  supervisor: <SidebarSupervidorOptions />,
  cashier: <SidebarCashierOptions />,
  doctor: <SidebarDoctorOptions />,
};

interface SidebarProps {
  session: Session;
}

export async function Sidebar({ session }: SidebarProps) {
  const sidebarOptions = sidebars[session.user.role];

  return (
    <Command
      id="carmen"
      className="hidden h-[calc(100vh-66px)] max-w-[300px] md:block shadow-md border-r"
    >
      <CommandInput placeholder="Type a command or search..." />
      {sidebarOptions}
    </Command>
  );
}
