import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Scroll, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "/latar-belakang", label: "Latar Belakang" },
  { href: "/tokoh", label: "Tokoh" },
  { href: "/proses", label: "Proses" },
  { href: "/upaya-pemerintah", label: "Upaya Pemerintah" },
  { href: "/kondisi-akhir", label: "Kondisi Akhir" },
  { href: "/daftar-pustaka", label: "Daftar Pustaka" },
];

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-amber-900 to-amber-800 border-b border-amber-700">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-amber-50 hover:text-amber-200 transition-colors"
          >
            <Scroll className="h-6 w-6" />
            <span className="text-xl font-bold">Pemberontakan APRA</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <Button 
                    variant="ghost" 
                    className="text-amber-50 hover:text-amber-200 hover:bg-amber-800/50"
                  >
                    {item.label}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" className="text-amber-50 hover:text-amber-200 hover:bg-amber-800/50">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-amber-50">
              <SheetHeader>
                <SheetTitle className="text-amber-900">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className="text-amber-900 hover:text-amber-700 py-2 px-4 rounded-md hover:bg-amber-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}