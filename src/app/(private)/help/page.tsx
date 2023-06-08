import Breadcrumbs from '@/components/ui/breadcrumbs';
import PageTitle from '@/components/ui/page-title';
import React from 'react';

const breadcrumbs = [
  {
    label: 'Inicio',
    href: '/dashboard',
  },
  {
    label: 'Ayuda',
    href: '/help',
  },
];

const HelpPage = () => {
  return (
    <div className="container">
      <div className="my-4 flex flex-col gap-4">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <PageTitle
          title="Ayuda"
          subtitle="Encuentra respuestas a tus preguntas y obtén asistencia aquí!"
        />
      </div>

      <p className='mb-2'>
        Es un placer recibirte en nuestro sitio web, donde encontrarás
        soluciones, información y servicios diseñados especialmente para ti.
        Queremos hacer tu experiencia aquí lo más agradable posible, brindándote
        un espacio claro, sencillo y fácil de navegar.
      </p>

      <p className='mb-2'>
        Nuestro objetivo es proporcionarte toda la ayuda que necesitas, ya sea
        en tu rol de administrador del sistema, doctor o cajero. Estamos
        comprometidos en ofrecerte soluciones efectivas y respuestas a tus
        inquietudes.
      </p>

      <p className='mb-2'>
        Si tienes alguna pregunta, requerimientos especiales o simplemente
        deseas obtener más información, no dudes en contactarnos. Estamos aquí
        para asistirte en todo momento.
      </p>

      <p className='mb-2'>
        Agradecemos tu visita y confianza en nuestro sitio web. Esperamos que
        encuentres todo lo que necesitas y que tu experiencia sea excepcional.
      </p>
    </div>
  );
};

export default HelpPage;
