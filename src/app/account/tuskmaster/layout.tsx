
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const accountNavItems = [
  { href: "/account/tuskmaster", label: "My Jobs" },
  { href: "/account/tuskmaster/offers", label: "Offers" },
  { href: "/account/tuskmaster/history", label: "Order History" },
  { href: "/account/tuskmaster/chat", label: "Chat" },
];

export default function CustomerAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">My Account</h1>
        <p className="text-muted-foreground">View your job calendar and manage your postings.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 items-start">
        <div className="md:col-span-1">
          <div className="card">
            <div className="p-2 rounded-lg border border-[var(--border)] bg-white text-[var(--foreground)] shadow-sm">
              <nav className="flex flex-col space-y-1">
                {accountNavItems.map((item) => (
                  <Link key={item.href} href={item.href} className={`text-sm font-medium h-10 px-4 w-full text-left leading-[40px] text-[var(--blackish)] transition-colors rounded-md hover:text-white hover:bg-[var(--accent)] ${ pathname === item.href && "secondary-btn"}`}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
           <div className="mt-6">
              <Link href="/jobs/new" className="text-sm h-10 px-4 w-full btn secondary-btn">Post a New Job</Link>
          </div>
        </div>

        <div className="md:col-span-3">
          {children}
        </div>
      </div>
    </div>
  );
}
