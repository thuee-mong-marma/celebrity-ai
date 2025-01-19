import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const loResFont = localFont({
  src: './../public/fonts/LoRes21OTSerif-Regular.ttf',
});

export const metadata: Metadata = {
  title: 'Celebrity AI',
  description: 'Celebirty AI is a website where people can come and choose from a list of well known celebrities and the chatbot will give advice by mimicking their personality',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${loResFont.className} min-h-screen bg-background`}>
        {children}
      </body>
    </html>
  );
}
