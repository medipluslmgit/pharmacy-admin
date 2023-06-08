import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

interface DoctorAppProps {
  children: React.ReactNode;
}

const DoctorApp = async ({ children }: DoctorAppProps) => {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== 'doctor') {
    redirect('/no-doctor');
  }

  return <>{children}</>;
};

export default DoctorApp;
