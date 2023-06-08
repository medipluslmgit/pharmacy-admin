import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { AuthForm } from '@/components/pages/auth/auth-form';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function AuthenticationPage() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/login/');
  }

  return (
    <>
      <div className="container relative  h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/images/pills.jpg)',
            }}
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image
              alt="logo"
              src="/logo/white.svg"
              width={120}
              height={80}
              priority={false}
            />
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Nuestra misión es proporcionar productos farmacéuticos de
                calidad y servicios de salud confiables a nuestros clientes, con
                el objetivo de mejorar su bienestar y calidad de vida.&rdquo;
              </p>
              <footer className="text-sm">Medi+LM</footer>
            </blockquote>
          </div>
        </div>

        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Iniciar sesión
              </h1>
              <p className="text-sm text-muted-foreground">
                Para continuar, inicie sesión en Medi+LM. Si no tiene una
                cuenta, puede contactar con el administrador.
              </p>
            </div>

            <AuthForm />

            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
