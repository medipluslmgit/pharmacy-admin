import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import PageTitle from '@/components/ui/page-title';

const subtitles = {
  admin: 'Administra la farmacia desde aqui',
  supervisor: 'Administra la farmacia desde aqui',
  doctor: 'Los medicamentos dispobnibles aqui',
  cashier: 'Sistema para cobrar y registrar las ventas',
};

export default async function IndexPage() {
  const session = await getServerSession(authOptions);
  if (!session) return null;

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <PageTitle
        title={`Hola ${session.user.name}`}
        // @ts-ignore
        subtitle={subtitles[session.user.role]}
      />

      <div className="flex gap-4 justify-center mt-4">
        <Image
          width={400}
          height={400}
          placeholder="blur"
          blurDataURL="/illustrations/undraw_doctors_p6aq.svg"
          src="/illustrations/undraw_doctors_p6aq.svg"
          alt="Illustration of a doctor"
        />
      </div>
    </section>
  );
}
