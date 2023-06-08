import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const NoCashierPage = async () => {
  const session = await getServerSession()

  if (!session?.user) {
    redirect("/login")
  }

  return <div>NoCashierPage</div>;
};

export default NoCashierPage;
