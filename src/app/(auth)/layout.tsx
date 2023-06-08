import '../globals.css';
import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth';

import { ThemeToggle } from '@/components/layout/theme-toggle';
import { authOptions } from '../api/auth/[...nextauth]/route';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function PublicLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/');
  }

  return (
    <>
      <div className="relative h-0">
        <div className="absolute z-10 top-4 right-4">
          <ThemeToggle />
        </div>
      </div>
      {children}
    </>
  );
}
