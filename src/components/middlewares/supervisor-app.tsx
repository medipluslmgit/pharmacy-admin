import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

interface SupervisorAppProps {
  children: React.ReactNode;
}

const SupervisorApp = async ({ children }: SupervisorAppProps) => {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== 'supervisor') {
    redirect('/no-supervisor');
  }

  return <>{children}</>;
};

export default SupervisorApp;
