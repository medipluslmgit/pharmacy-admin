// import MedicinesTable from '@/components/pages/doctor-medicine-list/medicines-table';

import Breadcrumbs from '@/components/ui/breadcrumbs';
import PageTitle from '@/components/ui/page-title';
import {
  Table,
  TableBody,
  TableCaption,
  TableHeader,
  TableRow as TR,
} from '@/components/ui/table';
import TableHead from './components/TableHead';
import InputSearch from './components/InputSearch';
import Pagination from './components/pagination';
import TableRow from './components/table-row';
import { LIMIT } from './constants';
import { Card, CardContent } from '@/components/ui/card';

const API_URL = process.env.API_URL || `http://localhost:5500`;

type Props = {
  searchParams?: {
    limit?: number;
    offset?: number;
    term?: string;
    orderBy?: string;
    orderMode?: string;
  };
};

interface Medicine {
  name: string;
  description: string;
  administrationWay: string;
  gtin: string;
  laboratory: string;
  category: string;
  productForm: string;
  isControlledProduct: number;
  isAntibiotic: number;
  isRefrigerated: number;
  group: number;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  createdById: number;
  isGeneric: number;
  nextExpirationDate: Date | null;
  pharmacyPricing: number | null;
  clinicPricing: number | null;
  webPricing: number | null;
  maxPricing: number | null;
  purchasePricingPerUnit: number;
  soldStockCount: string;
  availableStockCount: string;
}

interface MedicineList {
  orderBy: string;
  orderMode: string;
  limit: number;
  offset: number;
  allItems: number;
  count: number;
  currentPage: number;
  totalPages: number;
  items: Medicine[];
}

const fetchData = async ({
  limit = LIMIT,
  offset = 0,
  orderBy = 'created_at',
  orderMode = 'asc',
  term = '',
}) => {
  const resp = await fetch(
    `${API_URL}/products/find-by-term?limit=${limit}&offset=${offset}&orderBy=${orderBy}&orderMode=${orderMode}`,
    {
      body: JSON.stringify({ term }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      cache: 'no-store',
    }
  );
  return await resp.json();
};

const MedicinesListPage = async (req: Props) => {
  const {
    offset = 0,
    limit = LIMIT,
    orderBy = 'createdAt',
    orderMode = 'asc',
    term = '',
  } = req.searchParams || {};

  const medicines: MedicineList = await fetchData({
    limit,
    offset,
    orderBy,
    orderMode,
    term,
  });

  console.log({
    term,
    ...medicines,
    items: undefined,
  });

  if (!medicines.items) {
    return (
      <div className="container mt-4 flex flex-col gap-8">
        <Breadcrumbs
          breadcrumbs={[
            { href: '/doctor', label: 'Inicio' },
            { href: '/medicines/list', label: 'Listado de medicamentos' },
          ]}
        />

        <PageTitle
          title="Listado de medicamentos"
          subtitle="Listado de medicamentos disponibles en la farmacia."
        />

        <InputSearch />

        <h1 className="text-lg">No se encontraron medicamentos</h1>
      </div>
    );
  }

  return (
    <div className="container mt-4 flex flex-col gap-8 mb-8 max-w-[95vw] overflow-x-auto">
      <Breadcrumbs
        breadcrumbs={[
          { href: '/doctor', label: 'Inicio' },
          { href: '/medicines/list', label: 'Listado de medicamentos' },
        ]}
      />

      <PageTitle
        title="Listado de medicamentos"
        subtitle="Listado de medicamentos disponibles en la farmacia."
      />

      <InputSearch />

      <Card>
        <CardContent>
          <Table className="text-md overflow-x-auto max-w-[60vw]">
            <TableHeader>
              <TR>
                <TableHead label="Name" orderBy="name" />
                <TableHead label="Forma" orderBy="productForm" />
                <TableHead label="GTIN" orderBy="gtin" />
                <TableHead label="Stock" orderBy="availableStockCount" />
                <TableHead label="Laboratorio" orderBy="laboratory" />
              </TR>
            </TableHeader>

            <TableBody style={{ maxWidth: '100vw', overflowX: 'auto' }}>
              {medicines.items.map((medicine) => (
                <TableRow key={medicine.gtin} {...medicine} />
              ))}
            </TableBody>

            <TableCaption>
              Total de medicamentos: {medicines.allItems}
            </TableCaption>
          </Table>
        </CardContent>
      </Card>
      <div className="flex justify-center">
        <Pagination
          limit={medicines.limit}
          offset={medicines.offset}
          totalItems={medicines.allItems}
          currentPage={medicines.currentPage}
          totalPages={medicines.totalPages}
        />
      </div>
    </div>
  );
};

export default MedicinesListPage;
