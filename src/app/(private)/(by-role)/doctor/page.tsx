import PageTitle from '@/components/ui/page-title';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DoctorHomePage = () => {
  return (
    <div className="container mt-8 flex flex-col gap-8">
      <PageTitle title="Bienvenido Doctor" subtitle="Medi+LM v0.0.1 - 2023" />
      <div className="flex flex-col gap-8 mt-4">
        <p className="md:hidden">En Medi+LM nos preocupamos</p>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/illustrations/undraw_medicine_b-1-ol.svg"
            alt="Doctor heart"
            width={500}
            height={500}
          />
          <p className="hidden md:block mt-10 max-w-[800px] text-center">
            En Medi+LM nos preocupamos por tener disponibles los medicamentos
            que necesitas para salvar vidas, por eso te invitamos a que nos
            ayudes a saber que medicamentos hacen falta en la farmacia.
          </p>
          <p className="text-center mt-4">
            Puedes hacer tus solicitudes de medicamentos enviando un correo
            al&nbsp;
            <Link href="mailto:medipluslm00@gmail.com?subject=Solicutud de medicamentos" className="text-sky-600">
              {/* <a
                className="text-sky-600"
                href="mailto:medipluslm00@gmail.com?subject=Solicutud de medicamentos"
              > */}
                correo oficial.
              {/* </a> */}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorHomePage;
