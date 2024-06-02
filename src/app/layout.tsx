import type { Metadata } from "next";
import "./globals.css";
import TopLevel from './components/TopLabel';
import TopLabel from "./components/TopLabel";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Shahmir Ecommerce Website",
  description: "Generated by Syed Shahmir Sultan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopLabel/>
        <div className="max-w-[1250px] mx-auto"> <NavBar/>{children}
        <Footer/></div></body>
    </html>
  );
}
