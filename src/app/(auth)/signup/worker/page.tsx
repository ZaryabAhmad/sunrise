import Link from "next/link";

export default function WorkerSignUpPage() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] py-12 px-4">
            <div className="w-full max-w-md card">
                <div className="space-y-1.5 cardHeader">
                    <div className="text-2xl font-headline cardTitle">Become a Tusker</div>
                    <div className="text-sm text-[var(--muted-foreground)]">
                        Sign up to find jobs and start earning.
                    </div>
                </div>
                <div className="grid gap-4 cardContent">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <label className="label" htmlFor="first-name">First name</label>
                            <input className="h-10 text-base md:text-sm input" id="first-name" placeholder="Max" required />
                        </div>
                        <div className="grid gap-2">
                            <label className="label" htmlFor="last-name">Last name</label>
                            <input className="h-10 text-base md:text-sm input" id="last-name" placeholder="Robinson" required />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <label className="label" htmlFor="email">Email</label>
                        <input className="h-10 text-base md:text-sm input" id="email" type="email" placeholder="m@example.com" required />
                    </div>
                    <div className="grid gap-2">
                        <label className="label" htmlFor="password">Password</label>
                        <input className="h-10 text-base md:text-sm input" id="password" type="password" required />
                    </div>
                    <div className="grid gap-2">
                        <label className="label" htmlFor="skills">Your Skills</label>
                        <textarea className="min-h-20 text-base md:text-sm textarea" id="skills" placeholder="Tell us what you're good at, e.g., plumbing, furniture assembly, painting..." />
                    </div>
                    <button type="submit" className="text-sm h-10 px-8 btn primary-btn w-full">
                        Create Tusker account
                    </button>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="underline">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
