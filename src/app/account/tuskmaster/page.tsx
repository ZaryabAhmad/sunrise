
'use client';

import * as React from 'react';
// import { Button } from "@/components/ui/button";
import { jobs } from "@/lib/data";
// import { Badge } from "@/components/ui/badge";
import Link from "next/link";
// import { Calendar } from '@/components/ui/calendar';

export default function CustomerAccountPage() {
  const myJobs = jobs.slice(0, 2); // Mock data
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const jobDates = [
    new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3),
    new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 12),
  ];

  const isJobDay = (day: Date) => {
    return jobDates.some(jobDate =>
      day.getFullYear() === jobDate.getFullYear() &&
      day.getMonth() === jobDate.getMonth() &&
      day.getDate() === jobDate.getDate()
    );
  };

  return (
    <div className="grid md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-2">
        <div className="card">
          <div className="space-y-1.5 cardHeader">
            <div className="text-2xl font-headline cardTitle">My Posted Jobs</div>
            <p className='text-sm text-[var(--muted-foreground)]'>Here are the jobs you've recently posted. Check the calendar for scheduled dates.</p>
          </div>
          <div className="cardContent">
            <div className='relative w-full overflow-auto'>
              <table className='table'>
                <thead>
                  <tr>
                    <th className='th'>Title</th>
                    <th>Category</th>
                    <th>Budget</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {myJobs.map((job) => (
                    <tr key={job.id}>
                      <td className="font-medium">{job.title}</td>
                      <td>{job.category}</td>
                      <td>${job.budget}</td>
                      <td><span className="badge bg-orange">Open</span></td>
                      <td className="text-right">
                        <Link href={`/account/tuskmaster/jobs/${job.id}`} className='text-sm h-10 px-4 btn gray-btn'>View Job</Link>
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

      <div className="md:col-span-1 space-y-6">
        <div className="card">
          <div className="space-y-1.5 cardHeader">
            <div className="text-2xl font-headline cardTitle">Job Calendar</div>
            <p className='text-sm text-[var(--muted-foreground)]'>Your upcoming job dates are highlighted.</p>
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
      </div>
    </div>
  );
}
