"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Menu, Sun } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/jobs", label: "Find Jobs" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)] backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container'>
        <nav className="h-16 flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center gap-2 mr-6">
            {/* <Image
              src={logo}
              alt="Flowbite Logo"
              width={272}
              height={63}
            /> */}
            <Sun className="h-6 w-6 text-[var(--primary)]" />
            <span className="font-bold text-lg">SunriSurf</span>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} grow md:basis-auto absolute left-0 top-[100%] w-full md:flex md:w-auto md:static`} id="navbar-default">
            <ul className="flex flex-col md:items-center py-2 md:p-0 rounded-lg bg-[var(--color-light-gary)] md:flex-row gap-6 mr-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
                >
                  {link.label}
                </Link>
              ))}
            </ul>
            <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
              <Link href="/login" className='text-sm h-10 px-4 btn transparent-btn'>Log In</Link>
              <Link href="/signup" className='text-sm h-10 px-4 btn secondary-btn'>Sign Up</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;