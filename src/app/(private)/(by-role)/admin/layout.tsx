import AdminApp from '@/components/middlewares/admin-app';
import React from 'react';

interface AdminAppLayoutProps {
  children: React.ReactNode;
}

async function AdminAppLayout({ children }: AdminAppLayoutProps) {
  return <AdminApp>{children}</AdminApp>;
}

export default AdminAppLayout;
