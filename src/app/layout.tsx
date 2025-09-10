import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Do not modify this file

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TomoCredit Clone",
  description: "Build credit without traditional credit history",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">TomoCredit</div>
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-blue-600">Home</a></li>
              <li><a href="/apply" className="hover:text-blue-600">Apply</a></li>
              <li><a href="/about" className="hover:text-blue-600">About</a></li>
              <li><a href="/login" className="hover:text-blue-600">Login</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 py-8 mt-16">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>&copy; 2023 TomoCredit Clone. All rights reserved.</p>
            <ul className="flex justify-center space-x-4 mt-4">
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
