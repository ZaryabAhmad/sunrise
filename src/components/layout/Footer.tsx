import Link from 'next/link';
import { Sun } from "lucide-react";


const navLinks = [
  { href: "/account/tuskmaster", label: "For Tuskmasters" },
  { href: "/account/tusker", label: "For Tuskers" },
  { href: "/services", label: "Services" },
  { href: "/account/stuff", label: "Staff" },
];


const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Sun className="h-6 w-6 text-[var(--primary)]" />
            <span className="font-bold font-headline text-lg">SunriSurf</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-[var(--muted-foreground)]">
            &copy; {new Date().getFullYear()} SunriSurf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;