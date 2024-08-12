import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Draw the I Ching and predict the future | Kabastro',
  description: 'Draw an I Ching hexagram and predict the future. A useful tool to help you learn about the I Ching and explore the Eastern philosophical system.',
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
