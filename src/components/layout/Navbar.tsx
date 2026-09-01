"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Nyumbani" },
  { href: "/leadership", label: "Uongozi" },
  { href: "/churches", label: "Makanisa" },
  { href: "/members", label: "Wanachama" },
  { href: "/events", label: "Matukio" },
  { href: "/downloads", label: "Pakua" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-rule">
      <div className="container-editorial">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-ink flex items-center justify-center">
              <span className="text-paper font-editorial font-black text-sm leading-none">U</span>
            </div>
            <div>
              <div className="font-editorial font-bold text-sm leading-tight">UMKKT</div>
              <div className="meta-label" style={{ fontSize: "0.6rem" }}>Tanzania</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/verify" className="btn-outline text-xs py-2 px-4">
              Hakiki Mwanachama
            </Link>
            <Link href="/admin" className="btn-primary text-xs py-2 px-4">
              Admin
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-paper border-t border-rule">
          <div className="container-editorial py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="editorial-rule pt-4 flex flex-col gap-2">
              <Link href="/verify" className="btn-outline text-center" onClick={() => setOpen(false)}>Hakiki Mwanachama</Link>
              <Link href="/admin" className="btn-primary text-center" onClick={() => setOpen(false)}>Admin</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}