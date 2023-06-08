/*
  If The path is "/" we need to redirect to apropiate page based on the user role.
  
  admin -> /admin
  supervisor -> /supervisor
  cashier -> /cashier
  doctor -> /doctor
*/


import LogguedApp from '@/components/middlewares/loggued-app';
import React from 'react';

import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';


const HomePage = async () => {
  const session = await getServerSession(authOptions);

  return (
    /* @ts-expect-error Async Server Component */
    <LogguedApp session={session}>
      <div>HomePage</div>
    </LogguedApp>
  );
};

export default HomePage;
