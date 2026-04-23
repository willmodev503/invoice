import'./globals.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import ThemeProvider from './theme-provider';
 
export const metadata: Metadata = {
  title: {
    template: 'Acme Dashboard | %s | ',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
