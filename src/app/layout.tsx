// RootLayout.tsx
import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <main className="flex justify-center items-center min-h-screen">
          <div className="text-center space-y-4 w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
