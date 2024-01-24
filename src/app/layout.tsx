import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { appConfig } from '@/app.config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: appConfig.name,
    template: `%s - ${appConfig.name}`,
  },
  metadataBase: new URL(appConfig.url),
  description: appConfig.description,
  keywords: [],
  authors: appConfig.authors,
  creator: appConfig.creator,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
