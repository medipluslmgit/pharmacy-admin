import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const NoAdminPage = async () => {
  const session = await getServerSession()

  if (!session?.user) {
    redirect("/login")
  }

  return (
    <div>NoAdminPage</div>
  )
}

export default NoAdminPage
