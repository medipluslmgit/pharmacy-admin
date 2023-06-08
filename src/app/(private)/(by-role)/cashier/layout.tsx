import CashierApp from '@/components/middlewares/cashier-app';

interface CashierAppLayoutProps {
  children: React.ReactNode;
}

const CashierAppLayout = ({ children }: CashierAppLayoutProps) => {
  return <CashierApp>{children}</CashierApp>;
};

export default CashierAppLayout;
