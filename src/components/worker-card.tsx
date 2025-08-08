import type { WorkerProfile } from "@/lib/types";
import placeholderImage from "../images/400x200.png";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

interface WorkerCardProps {
  worker: WorkerProfile;
}

export function WorkerCard({ worker }: WorkerCardProps) {
  return (
    <div className="card w-full overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <Image
          src={placeholderImage}
          data-ai-hint="workspace tools"
          alt={`${worker.name}'s workspace`}
          width={400}
          height={200}
          className="object-cover w-full h-32"
        />
        <div className="absolute top-22 left-1/2 -translate-x-1/2">
          <Image
            src={worker.avatarUrl}
            data-ai-hint="person avatar"
            alt={worker.name}
            width={80}
            height={80}
            className="rounded-full border-4 border-white border-card shadow-md"
          />
        </div>
      </div>
      <div className="text-center pt-14 p-6">
        <h3 className="text-lg font-bold font-headline">{worker.name}</h3>
        <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mt-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span>{worker.ratings.average.toFixed(1)} Rating</span>
        </div>
        <p className="text-muted-foreground text-sm mt-3 h-10 line-clamp-2">{worker.tagline}</p>
        <div className="mt-4 flex flex-wrap items-start justify-center gap-2 h-14">
          {worker.skills.slice(0, 3).map((skill) => (
            <div key={skill} className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.75 text-xs font-semibold bg-[var(--clr-secondary)] text-[var(--clr-blackish)]">{skill}</div>
          ))}
          {worker.skills.length > 3 && <div className="inline-flex items-center rounded-full border px-2.5 py-0.75 text-xs font-semibold text-[var(--foreground)] border-[var(--border)]">+{worker.skills.length - 3}</div>}
        </div>
      </div>
      <div className="flex items-center p-6 pt-0">
        <Link href={`/workers/${worker.id}`} className="text-sm  h-10 px-4 w-full border border-[var(--clr-light-gray4)] text-[var(--clr-blackish2)] bg-[var(--clr-light-gray3)] hover:bg-[var(--accent)] hover:text-white btn">View Profile</Link>
      </div>
    </div>
  );
}
