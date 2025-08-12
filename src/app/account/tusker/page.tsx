
'use client';

import * as React from 'react';
import { jobs, mockWorker } from "@/lib/data";
import { Star, Briefcase, Clock, DollarSign } from "lucide-react";
import Link from "next/link";
// import { Calendar } from '@/components/ui/calendar';

export default function TuskerDashboardPage() {
  const myOffers = jobs.slice(2, 4);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [earningsVisible, setEarningsVisible] = React.useState(false);

  const scheduledJobDates = [
    new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 5),
    new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 10),
  ];

  const isJobDay = (day: Date) => {
    return scheduledJobDates.some(jobDate =>
      day.getFullYear() === jobDate.getFullYear() &&
      day.getMonth() === jobDate.getMonth() &&
      day.getDate() === jobDate.getDate()
    );
  };

  return (
    <div className="grid md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-2 space-y-8">
        <div className="card">
          <div className="cardHeader">
            <div className="text-2xl font-headline cardTitle">Stats at a Glance</div>
          </div>
          <div className="cardContent grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-lg bg-[var(--secondary)]">
              <Briefcase className="w-8 h-8 mx-auto text-[var(--primary)] mb-2" />
              <p className="text-2xl font-bold">{mockWorker.stats.totalJobs}</p>
              <p className="text-sm text-[var(--muted-foreground)]">Jobs Done</p>
            </div>
            <div className="p-4 rounded-lg bg-[var(--secondary)]">
              <Clock className="w-8 h-8 mx-auto text-[var(--primary)] mb-2" />
              <p className="text-2xl font-bold">{mockWorker.stats.totalHours}</p>
              <p className="text-sm text-[var(--muted-foreground)]">Hours Worked</p>
            </div>
            <div
              className="p-4 rounded-lg bg-[var(--secondary)] cursor-pointer"
              onClick={() => setEarningsVisible(!earningsVisible)}
              title={earningsVisible ? "Click to hide" : "Click to reveal"}
            >
              <DollarSign className="w-8 h-8 mx-auto text-[var(--primary)] mb-2" />
              <p className={`text-2xl font-bold transition-all ${!earningsVisible && "blur-md"}`}>
                ${mockWorker.stats.totalEarnings.toLocaleString()}
              </p>
              <p className="text-sm text-[var(--muted-foreground)]">Total Earnings</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="space-y-1.5 cardHeader">
            <div className="text-2xl font-headline cardTitle">My Active Offers</div>
            <p className='text-sm text-[var(--muted-foreground)]'>Jobs you've made an offer on.</p>
          </div>
          <div className="cardContent">
            <div className='relative w-full overflow-auto'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Job Title</th>
                    <th>Your Offer</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {myOffers.map((job) => (
                    <tr key={job.id}>
                      <td className="font-medium">{job.title}</td>
                      <td>$95</td>
                      <td><span className='badge'>Pending</span></td>
                      <td className="text-right">
                        <Link href={`/jobs/${job.id}`} className='text-sm h-10 px-4 btn gray-btn'>View Job</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--muted-foreground)] text-center mt-4">
              To cancel or remove a job posting, please contact staff for assistance.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="card">
          <div className="space-y-1.5 cardHeader">
            <div className="text-2xl font-headline cardTitle">My Schedule</div>
            <p className='text-sm text-[var(--muted-foreground)]'>Your upcoming confirmed jobs are highlighted.</p>
          </div>
          <div className="cardContent flex justify-center">
            {/* <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              modifiers={{
                job: isJobDay,
              }}
              modifiersStyles={{
                job: {
                  border: "2px solid hsl(var(--primary))",
                  borderRadius: 'var(--radius)',
                }
              }}
            /> */}
          </div>
        </div>
        <div className="card">
          <div className="space-y-1.5 cardHeader">
            <div className="text-2xl font-headline cardTitle">My Profile</div>
          </div>
          <div className="cardContent">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 pb-4 border-b border-[var(--border)]">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <span className="text-2xl font-bold">{mockWorker.ratings.average.toFixed(1)}</span>
                <span className="text-muted-foreground">/ 5.0 Rating</span>
              </div>

              <div className="pt-2">
                <h4 className="font-semibold mb-2 text-sm text-center">Best Known For</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {mockWorker.skills.map((skill) => (
                    <span key={skill} className='badge'>{skill}</span>
                  ))}
                </div>
              </div>

            </div>
            <button className="mt-6 text-sm h-10 px-4 btn primary-btn w-full">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}
