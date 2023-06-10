import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

/**
 * This function is used to get the session from the server side
 * if the user is not logged in, it will redirect to the login page
 * @returns Session
 */
export async function getSafeServerSession (){
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    redirect('/login')
  }
  return session
}
