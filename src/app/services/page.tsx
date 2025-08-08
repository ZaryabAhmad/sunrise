import { serviceSections } from '@/lib/services-data';
import { ArrowRight, CheckCircle } from "lucide-react";;
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Explore Our Services</h1>
        <p className="text-[var(--muted-foreground)] mt-2 max-w-2xl mx-auto">
          Find help for any task, from small repairs to major moves. Our skilled workers are ready to get the job done right.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceSections.map((section) => (
            <div key={section.title} className="card group flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-1.5 p-6 flex flex-row items-center gap-4">
                  <div className="bg-[var(--primary-10)] text-[var(--primary)] p-3 rounded-lg">
                    <section.icon className="w-8 h-8 shrink-0" />
                  </div>
                   <div>
                      <div className="text-xl font-headline cardTitle">{section.title}</div>
                      {section.description && <p className="text-[var(--muted-foreground)] mt-1 text-sm">{section.description}</p>}
                   </div>
              </div>
              <div className="flex-grow cardContent">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-2">
                  {section.tasks.slice(0, 6).map((task) => (
                    <li key={task} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-[2px]" />
                      <span className="text-[var(--muted-foreground)]">{task}</span>
                    </li>
                  ))}
                </ul>
                {section.tasks.length > 6 && (
                    <p className="text-xs text-[var(--muted-foreground)] mt-3 sm:text-center">...and {section.tasks.length - 6} more!</p>
                )}
              </div>
              <div className="p-6 pt-0 mt-auto">
                  <Link href={`/jobs?search=${encodeURIComponent(section.title)}`} className="w-full text-sm h-10 px-4 btn secondary-btn">
                      Browse {section.title} Jobs
                      <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
