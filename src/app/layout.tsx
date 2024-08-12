import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Draw the I Ching and predict the future by Kabastro',
  description: 'Useful tool to help you learn about I Ching as well as approach the Eastern philosophical system',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app-wrapper">{children}</div>
      </body>
    </html>
  );
}
