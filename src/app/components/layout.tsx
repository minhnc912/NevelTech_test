import Link from "next/link";
import React from "react";
import Navbar from "./navbar";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-[family-name:var(--font-inter-sans)]">
      <header>
        {/* <nav>
          <Link href="/">Home</Link>
          <Link href="/game">game</Link>
        </nav> */}
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>{/* Footer content */}</footer>
    </div>
  );
}

export default Layout;
