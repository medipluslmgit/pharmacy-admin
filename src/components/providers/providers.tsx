'use client';

import { FC } from 'react';
import { ThemeProvider } from './theme-provider';
import SessionProvider from './session-provider';
import { TooltipProvider } from '../ui/tooltip';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <SessionProvider>{children}</SessionProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
};
