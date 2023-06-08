import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const appByRole = {
  admin: '/admin',
  doctor: '/doctor',
  cashier: '/cashier',
  supervisor: '/supervisor',
};

const publicRoutes = ['/policy', '/terms'];

interface UnlogguedProps {
  children: React.ReactNode;
}

const Unloggued = async (props: UnlogguedProps) => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect(appByRole[session.user.role] || '/no-role');
  }

  return <>{props.children}</>;
};

export default Unloggued;
