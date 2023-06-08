import Link from 'next/link';

const TermsPage = () => {
  return (
    <main className="container">
      <div className="py-10">
        <div className="mb-2">
          <Link
            href="/"
            className="underline underline-offset-4 hover:opacity-75"
          >
            Inicio
          </Link>
        </div>
        <h1 className="text-2xl font-bold mb-2">
          Términos y condiciones farmacia Medi+LM:
        </h1>

        <ol className="list-decimal pl-8">
          <li>
            Productos y servicios: Nuestra farmacia ofrece una amplia gama de
            productos farmacéuticos, medicamentos, productos de cuidado personal
            y servicios de salud. Todos los productos y servicios están sujetos
            a disponibilidad y se proporcionarán de acuerdo con los estándares
            de calidad y seguridad establecidos.
          </li>
          <li>
            Uso de los productos: Los productos farmacéuticos deben ser
            utilizados únicamente según las indicaciones y dosis recomendadas
            por los profesionales de la salud. Es responsabilidad del cliente
            seguir las instrucciones y advertencias proporcionadas en los
            empaques y consultar a un médico o farmacéutico en caso de dudas.
          </li>
          <li>
            Servicio al cliente: Nos esforzamos por brindar un servicio al
            cliente excepcional. Nuestro personal capacitado está disponible
            para proporcionar información, asesoramiento y orientación sobre el
            uso adecuado de los productos. Siempre haremos nuestro mejor
            esfuerzo para resolver cualquier problema o inquietud de manera
            oportuna y satisfactoria.
          </li>
          <li>
            Privacidad y confidencialidad: Respetamos la privacidad de nuestros
            clientes y nos comprometemos a proteger la confidencialidad de la
            información personal proporcionada. Toda la información recopilada
            se utilizará exclusivamente con fines relacionados con la prestación
            de servicios y no será compartida con terceros sin el consentimiento
            expreso del cliente, a menos que sea requerido por ley.
          </li>
          <li>
            Precios y pagos: Los precios de los productos y servicios se
            mostrarán de manera clara y precisa. Nos reservamos el derecho de
            realizar ajustes en los precios en caso de cambios en los costos de
            los proveedores o condiciones del mercado. Los pagos pueden
            realizarse en efectivo o a través de los métodos de pago aceptados
            en la farmacia.
          </li>
          <li>
            Precios y pagos: Los precios de los productos y servicios se
            mostrarán de manera clara y precisa. Nos reservamos el derecho de
            realizar ajustes en los precios en caso de cambios en los costos de
            los proveedores o condiciones del mercado. Los pagos pueden
            realizarse en efectivo o a través de los métodos de pago aceptados
            en la farmacia.
          </li>
          <li>
            Responsabilidad: Si bien nos esforzamos por garantizar la calidad y
            seguridad de los productos y servicios, no podemos hacernos
            responsables de cualquier daño o lesión que pueda surgir del mal uso
            o abuso de los productos adquiridos en nuestra farmacia.
          </li>
          <li>
            Modificaciones: Nos reservamos el derecho de modificar estos
            términos y condiciones en cualquier momento, sin previo aviso. Las
            modificaciones entrarán en vigor a partir de su publicación en
            nuestros establecimientos o en nuestra página web.
          </li>
        </ol>

        <p className='mt-2'>
          Al realizar una compra o utilizar nuestros servicios, se considerará
          que el cliente acepta y acuerda cumplir con estos términos y
          condiciones. Se recomienda leer detenidamente estos términos y
          condiciones antes de realizar una compra o utilizar nuestros
          servicios.
        </p>
      </div>
    </main>
  );
};

export default TermsPage;
