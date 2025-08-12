
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const accountNavItems = [
  { href: "/account/tusker", label: "My Dashboard" },
  { href: "/account/tusker/offers", label: "My Offers" },
  { href: "/account/tusker/history", label: "Job History" },
  { href: "/account/tusker/chat", label: "Chat" },
];

export default function TuskerAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">My Dashboard</h1>
        <p className="text-[var(--muted-foreground)]">Manage your profile, skills, and job offers.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 items-start">
        <div className="md:col-span-1">
          <div className="card">
            <div className="p-2">
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
              <div className="card">
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Browse the latest job postings to find your next opportunity.
                  </p>
                  <Link href="/jobs" className="text-sm h-10 px-4 w-full btn secondary-btn">Find New Work</Link>
                </div>
              </div>
          </div>
        </div>

        <div className="md:col-span-3">
          {children}
        </div>
      </div>
    </div>
  );
}
