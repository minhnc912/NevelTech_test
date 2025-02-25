import React from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-[family-name:var(--font-jost-sans)] flex flex-col gap-6 lg:gap-10">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col gap-6 lg:gap-10">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
