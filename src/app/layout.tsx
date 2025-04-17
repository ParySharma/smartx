import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import LoadingWrapper from '@/components/LoadingWrapper';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'SmartX',
    template: '%s | SmartX',
  },
  description: 'SmartX',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <LoadingWrapper>{children}</LoadingWrapper>
      </body>
    </html>
  );
}
