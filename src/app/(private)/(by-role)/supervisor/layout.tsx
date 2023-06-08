import SupervisorApp from '@/components/middlewares/supervisor-app';

interface SupervisorAppLayoutProps {
  children: React.ReactNode;
}

const SupervisorAppLayout = ({ children }: SupervisorAppLayoutProps) => {
  return (
    <SupervisorApp>{children}</SupervisorApp>
  );
};

export default SupervisorAppLayout;
