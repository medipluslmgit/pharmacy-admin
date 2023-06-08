import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/core/db';
import { Prisma } from '@prisma/client';
import z from 'zod';

const POST_SCHEMA = z.object({
  userName: z.string().min(3, 'El usuario debe tener almenos 3 caracteres'),
  password: z.string().min(3, 'La contraseña debe tener almenos 3 caracteres'),
  name: z.string().min(3, 'El nombre debe tener almenos 3 caracteres'),
  role: z.enum(['doctor', 'admin', 'supervisor', 'cashier']),
});

export async function POST(req: Request) {
  const body = await req.json();
  const validation = POST_SCHEMA.safeParse(body);
  if (!validation.success) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }
  const { userName, password, name, role } = body;
  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const user = await prisma.user.create({
      data: {
        userName,
        name,
        role,
        hashedPassword,
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log({error});

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          { error: 'user already exists' },
          { status: 403 }
        );
      }
    }
    return NextResponse.json(
      { error: 'Error on save the user' },
      { status: 500 }
    );
  }
}

export const GET = async () => {
  const users = await prisma.user.findMany();
  return NextResponse.json(users, { status: 200 });
};
