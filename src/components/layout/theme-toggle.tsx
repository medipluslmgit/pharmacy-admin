'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { BiMoon, BiSun } from 'react-icons/bi';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <BiSun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <BiMoon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
