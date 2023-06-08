import DoctorApp from '@/components/middlewares/doctor-app';

interface DoctorAppLayoutProps {
  children: React.ReactNode;
}

const DoctorAppLayout = ({ children }: DoctorAppLayoutProps) => {
  return <DoctorApp>{children}</DoctorApp>;
};

export default DoctorAppLayout;
