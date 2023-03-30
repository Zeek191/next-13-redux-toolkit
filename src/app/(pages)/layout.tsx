import ReduxProvider from '../providers/ReduxProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="min-h-full items-center justify-center flex">
      <body className="container">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
