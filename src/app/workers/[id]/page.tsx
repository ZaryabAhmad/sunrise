import * as React from 'react';
import { notFound } from "next/navigation";
import coverImage from "../../../images/1200x200.png";
import { mockWorker, workerProfiles } from "@/lib/data";
import { Star, Briefcase, Clock, DollarSign } from "lucide-react";
import Image from "next/image";

// This is a simplified function to find a worker.
// In a real app, you'd fetch this from a database.
function getWorkerById(id: string) {
  return workerProfiles.find(p => p.id === id);
}


export default function WorkerProfilePage({ params }: { params: any }) {
  const worker = getWorkerById(params.id as string);

  if (!worker) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="relative mb-16">
        <div className="card h-48 w-full overflow-hidden">
          <Image
            src={coverImage}
            data-ai-hint="workspace tools"
            alt={`${worker.name}'s workspace`}
            width={1200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
            <Image
              src={worker.avatarUrl}
              data-ai-hint="person avatar"
              alt={worker.name}
              width={160}
              height={160}
              className="rounded-full border-4 border-white shadow-lg"
            />
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-3xl font-bold font-headline">{worker.name}</h1>
              <p className="text-[var(--muted-foreground)] mt-1">{worker.tagline}</p>
            </div>
            <button className='text-sm h-11 px-8 btn primary-btn'>Contact {worker.name.split(' ')[0]}</button>
          </div>
        </div>
      </div> 


      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          <div className="card">
            <div className='cardHeader'>
              <div className="cardTitle text-2xl leading-none">About Me</div>
            </div>
            <div className="cardContent">
              <p className="text-[var(--muted-foreground)]">
                I am a dedicated and skilled artisan with a passion for quality craftsmanship. With over {Math.floor(worker.stats.totalHours / 2000)} years of experience, I specialize in a variety of tasks, always ensuring customer satisfaction. My commitment to punctuality and work ethic has earned me high ratings from clients. I look forward to helping you with your next project!
              </p>
            </div>
          </div>
          <div className="card">
            <div className='cardHeader'>
              <div className="cardTitle text-2xl leading-none">Stats at a Glance</div>
            </div>
            <div className="cardContent grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-[var(--secondary)]">
                <Briefcase className="w-8 h-8 mx-auto text-[var(--primary)] mb-2" />
                <p className="text-2xl font-bold">{worker.stats.totalJobs}</p>
                <p className="text-sm text-[var(--muted-foreground)]">Jobs Done</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--secondary)]">
                <Clock className="w-8 h-8 mx-auto text-[var(--primary)] mb-2" />
                <p className="text-2xl font-bold">{worker.stats.totalHours}</p>
                <p className="text-sm text-[var(--muted-foreground)]">Hours Worked</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--secondary)]">
                <DollarSign className="w-8 h-8 mx-auto text-[var(--primary)] mb-2" />
                <p className="text-2xl font-bold">${worker.stats.totalEarnings.toLocaleString()}</p>
                <p className="text-sm text-[var(--muted-foreground)]">Total Earnings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <div className='cardHeader'>
              <div className="cardTitle text-2xl leading-none">My Skills</div>
            </div>
            <div className="cardContent">
              <div className="flex flex-wrap gap-2">
                {worker.skills.map((skill) => (
                  <span key={skill} className="inline-flex items-center rounded-full border font-semibold transition-colors border-transparent bg-[var(--clr-secondary)] text-[var(--clr-blackish)] text-sm px-3 py-1">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="card">
            <div className='cardHeader'>
              <div className="cardTitle text-2xl leading-none">Ratings & Reviews</div>
            </div>
            <div className="cardContent">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 pb-4 border-b">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <span className="text-2xl font-bold">{worker.ratings.average.toFixed(1)}</span>
                  <span className="text-[var(--muted-foreground)]">/ 5.0 Average Rating</span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-sm">Work Quality</span>
                    <span className="text-sm font-bold">{worker.ratings.workQuality.toFixed(1)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Work Ethic</span>
                    <span className="text-sm font-bold">{worker.ratings.workEthic.toFixed(1)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Punctuality</span>
                    <span className="text-sm font-bold">{worker.ratings.punctuality.toFixed(1)}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
