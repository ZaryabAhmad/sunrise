import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] py-12 px-4">
      <div className="w-full max-w-md card">
        <div className="space-y-1.5 cardHeader">
          <div className="text-2xl font-headline cardTitle">Welcome Back</div>
          <div className="text-sm text-[var(--muted-foreground)]">
            Enter your credentials to access your account.
          </div>
        </div>
        <div className="grid gap-4 cardContent">
          <div className="grid gap-2">
            <label className="label" htmlFor="email">Email</label>
            <input className="h-10 text-base md:text-sm input" id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <label className="label" htmlFor="password">Password</label>
            <input className="h-10 text-base md:text-sm input" id="password" type="password" required />
          </div>
          <button type="submit" className="text-sm h-10 px-8 btn primary-btn w-full">
            Login
          </button>
          <div className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
