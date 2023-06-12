import db from '@/core/db';

const getAvailableStock = async () => {
  return await db.product_stock.findMany({
    where: {
      ticketId: null,
    },

    select: {
      id: true,
      pharmacyPricing: true,
      clinicPricing: true,
      webPricing: true,
      purchaseOrderProductId: true,
    },
  });
};

let mxCurrency = Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
});

const MoneyInvested = async () => {
  const productsWhitoutTicket = await getAvailableStock();

  const totalPharmacyPricing = productsWhitoutTicket.reduce(
    (prev, curr) => prev + curr.pharmacyPricing,
    0
  );

  const totalClinicPricing = productsWhitoutTicket.reduce(
    (prev, curr) => prev + curr.clinicPricing,
    0
  );

  const totalwebPricing = productsWhitoutTicket.reduce(
    (prev, curr) => prev + curr.webPricing,
    0
  );

  const prom =
    (totalClinicPricing + totalPharmacyPricing + totalwebPricing) / 3;

  return (
    <div>
      <div className="container">
        <div className="flex flex-col gap-4">
          <p className="grid grid-cols-2">
            <span className="font-bold">Total invertido en farmacia:</span>
            {mxCurrency.format(totalPharmacyPricing)}
          </p>
          <p className="grid grid-cols-2">
            <span className="font-bold">Total invertido en clinica:</span>
            {mxCurrency.format(totalClinicPricing)}
          </p>

          <p className="grid grid-cols-2">
            <span className="font-bold">Total invertido en web:</span>
            {mxCurrency.format(totalwebPricing)}
          </p>

          <hr />

          <p className="grid grid-cols-2">
            <span className="font-bold">Promedio</span>
            {mxCurrency.format(prom)}
          </p>
        </div>

        <div className="mt-4 overflow-y-scroll max-h-[420px]">
          {productsWhitoutTicket.map((product) => (
            <div key={product.id} className="grid grid-cols-2 gap-4">
              <p>{JSON.stringify(product)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoneyInvested;
