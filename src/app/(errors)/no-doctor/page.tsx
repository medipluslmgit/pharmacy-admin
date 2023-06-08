import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const NoDoctorPage = async () => {
  const session = await getServerSession()

  if (!session?.user) {
    redirect("/login")
  }
  return <div>NoDoctorPage</div>;
};

export default NoDoctorPage;
