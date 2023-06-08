export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Medi+LM',
  description: 'Farmacia especializada',
  mainNav: [
    {
      title: 'Inicio',
      href: '/',
    },
    {
      title: 'Ayuda',
      href: '/help',
    },
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
};
