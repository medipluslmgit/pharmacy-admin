import './globals.css';

// import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

import { Providers } from '@/components/providers/providers';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
        <Providers>
          {children}
          <Toaster />
          {/* <Analytics /> */}
        </Providers>
      </body>
    </html>
  );
}
