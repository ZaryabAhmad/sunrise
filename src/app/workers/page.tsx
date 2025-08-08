import { WorkerCard } from "@/components/worker-card";
import { workerProfiles } from "@/lib/data";
import { Search } from "lucide-react";

export default function WorkersPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold font-headline">Find an Artisan</h1>
        <p className="text-muted-foreground mt-2">
          Browse our community of talented artisans. Find the perfect person for your job, from carpentry to custom clothing, jewelry, to farmed goods.
        </p>
        <div className="mt-6 max-w-lg mx-auto flex gap-2">
          <input placeholder="Search by skill (e.g., 'carpentry')" className="text-base md:text-sm input h-11" />
          <button type="button" className="text-sm h-11 px-8 btn primary-btn bg-[var(--primary)]"><Search className="mr-2" />Search</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {workerProfiles.map((worker) => (
          <WorkerCard key={worker.id} worker={worker} />
        ))}
      </div>
    </div>
  );
}
