import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ProfileForm from '@/components/pages/profile/profile-form';
import { redirect } from 'next/navigation';
import db from '@/core/db';

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect('/login');

  const user = await db.user.findUnique({
    where: { id: session?.user?.id },
  });

  if (!user) return null;

  const account = await db.account.findFirst({
    where: { userId: user.id },
  });

  return (
    <div className="container my-4">
      <h2 className="text-xl font-bold my-4">Modificar datos del perfil:</h2>
      <ProfileForm user={user} account={account} />
    </div>
  );
};

export default ProfilePage;
