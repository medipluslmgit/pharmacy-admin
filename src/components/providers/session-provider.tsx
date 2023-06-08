'use client';
import { SessionProvider as SessionProviderNext } from 'next-auth/react';
import { FC } from 'react';

interface SessionProviderProps {
  children: React.ReactNode;
}

const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  return <SessionProviderNext>{children}</SessionProviderNext>;
};

export default SessionProvider;
