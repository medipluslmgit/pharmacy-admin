'use client';

import { TableCell, TableRow as TR } from '@/components/ui/table';

import { TbInfoCircle } from 'react-icons/tb';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ClientSafe from '@/components/layout/client-safe';

function formatNumberIntl(number: number) {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(number);
}

interface Props {
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

const TableRow = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ClientSafe>
      <TR>
        <TableCell className="max-w-[200px] w-[200px] md:max-w-[400px] md:w-[400px] overflow-ellipsis lowercase">
          <p className="uppercase">{props.name} </p>
          <p className="text-sm opacity-50">{props.description}</p>
        </TableCell>
        <TableCell className="max-w-[200px] w-[200px] overflow-ellipsis">
          <p>{props.productForm} </p>
        </TableCell>

        <TableCell className="max-w-[200px] w-[200px] overflow-ellipsis">
          <p>{props.gtin} </p>
        </TableCell>
        <TableCell className="max-w-[200px] w-[200px] overflow-ellipsis">
          <p>{props.availableStockCount} </p>
        </TableCell>
        <TableCell className="max-w-[200px] w-[200px] overflow-ellipsis">
          <p className="lowercase">{props.laboratory} </p>
        </TableCell>
        <TableCell className="max-w-[200px] w-[200px] overflow-ellipsis">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger>
              <Button onClick={() => setIsOpen(true)} variant="secondary">
                <TbInfoCircle className="text-xl text-sky-800" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="uppercase">{props.name}</DialogTitle>
                <DialogDescription>{props.productForm}</DialogDescription>
              </DialogHeader>

              <div className="flex flex-col lowercase">
                <p>
                  <strong className="font-bold capitalize">
                    Descripción:{' '}
                  </strong>
                  {props.description}
                </p>
                <p>
                  <strong className="font-bold capitalize">Categoría: </strong>
                  {props.category}
                </p>
                <p>
                  <strong className="font-bold capitalize">
                    Precio publico:{' '}
                  </strong>
                  {formatNumberIntl(props.pharmacyPricing || 0)}
                </p>
                <p>
                  <strong className="font-bold capitalize">
                    Precio con receta Medi+LM:{' '}
                  </strong>
                  {formatNumberIntl(props.clinicPricing || 0)}
                </p>
              </div>

              <DialogFooter>
                <Button
                  className="text-sky-800"
                  variant={'secondary'}
                  onClick={() => setIsOpen(false)}
                >
                  Cerrar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TableCell>
      </TR>
    </ClientSafe>
  );
};

export default TableRow;
