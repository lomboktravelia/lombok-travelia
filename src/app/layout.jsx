"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import "./globals.css";
import { UserProvider } from "@/utils/userContext";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathname = usePathname();

  const showHeader = pathname !== "/login" && pathname !== "/sign-up" && pathname !== "/admin" && pathname !== "/admin/dashboard" 
  && pathname !== "/admin/paket-tour" && pathname !== "/admin/destinasi" && pathname !== "/admin/gallery" && pathname !== "/admin/pesanan";

  return (
    <html lang="en">
      <head>
        <title>Lombok Travelia</title>
        <meta
          name="description"
          content="Explore Lombok with Lombok Travelia"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <UserProvider>
          {showHeader && <Header />}
          <div className="container">
            <main>{children}</main>
            <Footer />
          </div>
        </UserProvider>
      </body>
    </html>
  );
};

export default Layout;
