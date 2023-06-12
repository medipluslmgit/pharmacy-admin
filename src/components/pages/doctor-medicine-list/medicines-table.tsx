'use client';

import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Product,
  ProductCategory,
  ProductForm,
  ProductImage,
} from '@prisma/client';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

type Medicine = Product & {
  productCategory: ProductCategory;
  productForm: ProductForm;
  productImages: ProductImage[];
};

const MedicinesTable = () => {
  const [isLoading, setLoading] = useState<boolean>();
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  const params = useSearchParams();
  const limit = params.get('limit') || 10;
  const skip = params.get('skip') || 0;
  const term = params.get('term') || '';

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/medicines?limit=${limit}&skip=${skip}&term=${term}`)
      .then((res) => setMedicines(res.data.products))
      .catch((err) => {
        console.log(err);
        toast.error('Error al cargar los medicamentos');
      })
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 1000)
      );
  }, [limit, skip, term]);

  const loadingRows = Array.from({ length: 10 }).map((_, index) => (
    <TableRow key={index}>
      <TableCell colSpan={5} className="bg-slate-700 animate-pulse" />
      <TableCell className="bg-slate-700 animate-pulse" />
      <TableCell className="bg-slate-700 animate-pulse" />
      <TableCell className="bg-slate-700 animate-pulse" />
      <TableCell className="bg-slate-700 animate-pulse" />
    </TableRow>
  ));

  return (
    <>
      <Input />
      <Table>
        <TableCaption>
          Mostrando {12} de {5000}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>GTIN</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Presentación</TableHead>
            <TableHead>Laboratorio</TableHead>
            <TableHead>Stock</TableHead>
          </TableRow>
        </TableHeader>

        {isLoading ? (
          loadingRows
        ) : (
          <TableBody>
            {medicines.map((medicine, index) => (
              <TableRow key={medicine.id}>
                <TableCell>{medicine.name}</TableCell>
                <TableCell>Paracetamol</TableCell>
                <TableCell>Tabletas</TableCell>
                <TableCell>Genfar</TableCell>
                <TableCell>100</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </>
  );
};

export default MedicinesTable;
