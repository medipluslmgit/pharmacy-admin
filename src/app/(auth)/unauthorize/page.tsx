import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FC } from 'react';

interface UnauthorizePageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const UnauthorizePage: FC<UnauthorizePageProps> = ({ searchParams }) => {
  const { error } = searchParams;
  if (error !== 'AccessDenied') {
    redirect('/');
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-bold text-red-400">
          Upps! No se ha podido iniciar sesión
        </h2>
        <p>La cuenta de google aun no se encuentra asociada a ningun usuario</p>
        <Image
          src="/illustrations/undraw_secure_login_pdn4.svg"
          alt="Unauthorize page illustration"
          width={300}
          height={300}
        />
        <div className="flex flex-row items-center gap-4 h-5 mt-8">
          <Link href="/">Inicio</Link>
          <Separator orientation="vertical" />
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizePage;
