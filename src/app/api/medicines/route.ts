import { NextURL } from 'next/dist/server/web/next-url';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

import prisma from '@/core/db';

// const MedicineFilters = {
//   term: 'string',
//   page: 'number',
//   limit: 'number',
//   sort: 'string',
//   order: 'string',
// };

const MedicineFilters = z.object({
  term: z.string().optional().nullable(),
  limit: z.number().optional().nullable(),
  skip: z.number().optional().nullable(),
  sortBy: z.string().optional().nullable(),
  sortMode: z.string().optional().nullable(),
});

export async function GET(req: NextRequest) {
  const params = new NextURL(req.nextUrl).searchParams;
  const term = params.get('term') || '';
  const limit = Number(params.get('limit')) || 10;
  const skip = Number(params.get('skip')) || 0;
  const sortBy = params.get('sortBy') || 'name';
  const sortMode = params.get('sortMode') || 'asc';

  const validated = MedicineFilters.safeParse({
    term,
    limit,
    skip,
    sortBy,
    sortMode,
  });
  if (!validated.success) {
    return NextResponse.json({ error: validated.error }, { status: 403 });
  }

  try {
    const resp = await prisma.product.findMany({
      where: {
        OR: [{ name: { contains: term } }, { description: { contains: term } }],
      },
      take: limit,
      skip: skip,
      orderBy: {
        [sortBy]: sortMode,
      },
      include: {
        productForm: true,
        productCategory: true,
        productImages: true,
      },
    });

    return NextResponse.json({
      products: resp,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
