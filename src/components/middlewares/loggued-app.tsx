import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const appByRole = {
  admin: '/admin',
  doctor: '/doctor',
  cashier: '/cashier',
  supervisor: '/supervisor',
};

interface LogguedAppProps {
  children: React.ReactNode;
}

const LogguedApp = async ({ children }: LogguedAppProps) => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect('/login');
  }

  console.log('session', session);
  

  redirect(appByRole[session.user.role]);
};

export default LogguedApp;
