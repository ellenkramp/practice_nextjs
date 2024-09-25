"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navlinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot password", href: "/forgotpassword" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <>
      <div className="p-4">
        <input
          value={input}
          className="outline rounded-sm"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {children}
      {navlinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={
              isActive
                ? "text-yellow-400 font-serif font-bold"
                : "text-blue-400"
            }
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export default Layout;
