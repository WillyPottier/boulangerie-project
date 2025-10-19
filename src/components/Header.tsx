// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#products', label: 'Nos produits' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-amber-50 shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-amber-900">
              🥖 La Boulangerie
            </div>
          </Link>

          {/* Navigation Desktop */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-amber-900 hover:text-amber-700 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition-colors"
            >
              Commander
            </Link>
          </div>

          {/* Menu Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-amber-900"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-amber-900 hover:text-amber-700 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  className="block bg-amber-700 text-white px-6 py-2 rounded-full text-center hover:bg-amber-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Commander
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}