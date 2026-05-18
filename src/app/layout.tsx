import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Company dashboard',
  description: 'Company dashboard for project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
