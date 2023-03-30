import '@/styles/globals.css';

export const metadata = {
  title: 'To Do',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="min-h-full items-center justify-center flex">
      <body className="container">{children}</body>
    </html>
  );
}
