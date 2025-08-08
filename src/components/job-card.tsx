import type { Job } from "@/lib/types";
import Link from "next/link";
import { MapPin, Calendar, User, Tag } from "lucide-react";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="card w-full hover:shadow-md transition-shadow">
      <div className="cardHeader">
        <div className="cardTitle text-xl">{job.title}</div>
        <div className="text-sm text-[var(--muted-foreground)] flex items-center gap-2 pt-2 mt-1.5">
           <User className="w-4 h-4" /> Posted by {job.postedBy}
        </div>
      </div>
      <div className="cardContent space-y-4">
        <p className="text-base font-normal text-[var(--muted-foreground)] line-clamp-2">{job.description}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--muted-foreground)]">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[var(--primary)]" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[var(--primary)]" />
            <span>{job.postedAt}</span>
          </div>
        </div>
      </div>
      <div className="p-6 pt-0 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4 text-[var(--primary)]" />
          <div className="badge">{job.category}</div>
        </div>
        <div className="flex items-center gap-4">
            <span className="font-bold text-lg text-[var(--primary)]">${job.budget}</span>
            <Link className="text-sm h-10 px-4 btn primary-btn" href={`/jobs/${job.id}`}>View Details</Link>
        </div>
      </div>
    </div>
  );
}