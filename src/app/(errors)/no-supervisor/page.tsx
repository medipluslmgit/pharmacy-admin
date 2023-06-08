import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const NoSupervisorPage = async () => {
  const session = await getServerSession();

  if (!session?.user) {
    redirect('/login');
  }
  return <div>NoSupervisorPage</div>;
};

export default NoSupervisorPage;
