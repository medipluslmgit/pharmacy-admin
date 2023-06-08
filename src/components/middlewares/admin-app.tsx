import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

interface AdminAppProps {
  children: React.ReactNode;
}

const AdminApp = async ({ children }: AdminAppProps) => {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== 'admin') {
    redirect('/no-admin');
  }

  return <>{children}</>;
};

export default AdminApp;
