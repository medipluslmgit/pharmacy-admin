'use client';

import { signIn } from 'next-auth/react';
import { Button } from './ui/button';
import { FC } from 'react';
import { FaGoogle } from 'react-icons/fa';

interface GoogleButtonProps {
  className?: string;
}

const GoogleButton: FC<GoogleButtonProps> = ({ className }) => {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => signIn('google')}
      className={className}
    >
      <FaGoogle className="h-3 mr-2" /> Add google account
    </Button>
  );
};

export default GoogleButton;
