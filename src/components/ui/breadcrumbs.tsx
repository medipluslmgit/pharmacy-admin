import Link from 'next/link';
import React, { FC } from 'react';
import { Badge } from './badge';
import { Separator } from './separator';

interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <nav className="flex gap-2 h-6" aria-label="Breadcrumb">
      {breadcrumbs.map((breadcrumb) => (
        <>
          <Link key={breadcrumb.label} href={breadcrumb.href}>
            <Badge variant="secondary">{breadcrumb.label}</Badge>
          </Link>
          <Separator orientation="vertical" className='last:hidden' />
        </>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
