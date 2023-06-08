import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const NoRolePage = async () => {
  const session = await getServerSession();

  if (!session?.user) {
    redirect('/login');
  }
  return <div>NoRolePage</div>;
};

export default NoRolePage;
