// app/components/Navbar.js - NEW REDESIGNED VERSION
"use client";

import Link from 'next/link';
import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar({ dict, lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const otherLang = lang === 'en' ? 'am' : 'en';
  const otherLangText = lang === 'en' ? 'አማርኛ' : 'English';

  const navLinks = [
    { href: '#features', text: dict.features },
    { href: '#pricing', text: dict.pricing },
    { href: '#gallery', text: dict.gallery },
    { href: '#testimonials', text: dict.testimonials },
    { href: '#contact', text: dict.contact },
  ];

  return (
    <header className="bg-earth-100/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-earth-200 dark:border-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href={`/${lang}`} className="text-3xl font-cursive">
            <span className="bg-gradient-to-r from-primary to-gold-dark bg-clip-text text-transparent dark:from-primary-light dark:to-gold">
              {dict.brandName}
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-gold transition-colors duration-300">
                {link.text}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2">
             <Link href={`/${otherLang}`} className="flex items-center text-sm p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Globe size={18} className="mr-1.5"/> 
                <span>{otherLangText}</span>
             </Link>
            <ThemeSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 md:hidden flex flex-col items-center space-y-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-xl">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-gold py-2 text-lg w-full text-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                {link.text}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}