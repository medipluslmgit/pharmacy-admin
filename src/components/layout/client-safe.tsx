'use client';

import { useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const ClientSafe = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  if (isLoading) return null;

  return <>{children}</>;
};

export default ClientSafe;
