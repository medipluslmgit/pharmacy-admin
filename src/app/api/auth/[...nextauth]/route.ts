import bcrypt from 'bcrypt';
import NextAuth, { AuthOptions, DefaultSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { User as UserDB } from '@prisma/client';

import prisma from '@/core/db';

declare module 'next-auth' {
  interface Session {
    user: {} & UserDB & DefaultSession['user'];
  }

  interface User extends UserDB {}
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        userName: { label: 'Usuario', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.userName || !credentials.password) return null;
        const { userName, password } = credentials;

        const user = await prisma.user.findFirst({
          where: { userName: credentials.userName },
        });

        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isValid) throw new Error('Invalid credentials');

        user.hashedPassword = '';
        return user;
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          ...token,
        },
      };
    },
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
  },
  pages: {
    signIn: '/',
    error: '/unauthorize',
    signOut: '/login',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
