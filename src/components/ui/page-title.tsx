import { FC } from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle: FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">{title}</h1>
      <h2 className='class="text-lg text-muted-foreground"'>{subtitle}</h2>
    </div>
  );
};

export default PageTitle;
