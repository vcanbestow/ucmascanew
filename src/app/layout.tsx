import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
import AOSProvider from "@/components/UI/AOSProvider"; 
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import BackToTop from "@/components/UI/BackToTop";

export const metadata: Metadata = {
  title: "UCMAS",
  description: "UCMAS",

  icons: {
    icon: '/images/my-custom-favicon.png',
    shortcut: '/images/my-custom-favicon.png',
    apple: '/images/my-custom-favicon.png',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${poppins.className} overflow-x-hidden`}>
        <Header />
        <AOSProvider>
        <main className="">
          {children}
        </main>
        </AOSProvider>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}