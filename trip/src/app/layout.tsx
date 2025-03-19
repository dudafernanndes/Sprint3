import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/app/style/globals.css';

// Configurando a fonte Poppins
const poppins = Poppins({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TRIP - Assistente Virtual',
  description: 'Assistente Virtual para transporte ferroviário',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

