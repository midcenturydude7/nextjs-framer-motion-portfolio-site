import Header from "./components/Home/Header/Header";
import "./globals.css";

export const metadata = {
  title: "mgDev | NextJs • React • Framer-Motion",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rgm1dlw.css" />
      </head>
      <body className="bg-slate-900 font-[sofia-pro,_sans-serif] font-medium not-italic antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
