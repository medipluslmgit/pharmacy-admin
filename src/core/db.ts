import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient;
}

export const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
  globalThis.prisma = client;
}

export default client;

/*
  We declare a global variable called prisma and assign it the value of the PrismaClient instance.
  because we want to make sure that we only have one instance of PrismaClient in our application.
  https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
*/
