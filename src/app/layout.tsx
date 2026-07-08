import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300', '400', '500', '600', '700', '800', '900'],
})
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import BackToTop from "@/components/UI/BackToTop";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UCMAS",
  description: "UCMAS",

  icons: {
    icon: '/images/my-custom-favicon.png', // Path to your favicon in the public/ folder
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
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header />
        <main className="">
          {children}
        </main>
        {/* <Footer /> */}
        {/* <BackToTop /> */}
      </body>
    </html>
  );
}