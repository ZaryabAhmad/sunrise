import { Users, HardHat } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] py-12 px-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-2 font-headline">Join SunriSurf</h1>
        <p className="text-[var(--muted-foreground)] mb-8">Are you here to hire or to work?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/signup/customer">
            <div className="rounded-lg border border-[var(--border)] h-full p-6 flex flex-col items-center justify-center bg-white text-center hover:shadow-lg hover:border-[var(--primary)] transition-all">
              <Users className="w-12 h-12 mb-4 text-[var(--primary)]" />
              <h2 className="text-xl font-bold mb-2">I am a Tuskmasters</h2>
              <p className="text-sm text-[var(--muted-foreground)]">Post jobs and find reliable help for your tasks.</p>
            </div>
          </Link>
          <Link href="/signup/worker">
            <div className="rounded-lg border border-[var(--border)] h-full p-6 flex flex-col items-center justify-center bg-white text-center hover:shadow-lg hover:border-[var(--primary)] transition-all">
              <HardHat className="w-12 h-12 mb-4 text-[var(--primary)]" />
              <h2 className="text-xl font-bold mb-2">I am a Tusker</h2>
              <p className="text-sm text-[var(--muted-foreground)]">Find flexible work, set your own rates, and grow your business.</p>
            </div>
          </Link>
        </div>
         <div className="mt-8 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Log in
            </Link>
          </div>
      </div>
    </div>
  );
}
