import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/core/db';
import { Prisma } from '@prisma/client';

interface RouteParams {
  params: {
    id: string;
  };
}

const PUT_SCHEMA = z.object({
  name: z
    .string()
    .min(3, 'El nombre debe tener almenos 3 caracteres')
    .optional(),
  role: z.enum(['doctor', 'admin', 'supervisor', 'cashier']).optional(),
  email: z.string().email('El correo no es valido').optional(),
  image: z.string().url('La url de la imagen no es valida').optional(),
});
export async function PUT(req: NextRequest, { params: { id } }: RouteParams) {
  const body = await req.json();
  const validation = PUT_SCHEMA.safeParse(body);

  console.log('body', body);
  console.log('validation', validation);

  if (!validation.success) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  try {
    const updated = await prisma.user.update({
      where: { id },
      data: body,
    });
    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          { error: 'user already exists' },
          { status: 403 }
        );
      }
    }
  }
}

export const GET = async (_: NextRequest, { params: { id } }: RouteParams) => {
  const users = await prisma.user.findFirst({ where: { id } });
  return NextResponse.json(users, { status: 200 });
};
