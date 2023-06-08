import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

interface CashierAppProps {
  children: React.ReactNode;
}

const CashierApp = async ({ children }: CashierAppProps) => {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== 'cashier') {
    redirect('/no-cashier');
  }

  return <>{children}</>;
};

export default CashierApp;
