import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Globals Styled
import '@/styles/globals.css';

// Load Inter font
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
