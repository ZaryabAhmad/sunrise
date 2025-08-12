
'use client';

import * as React from 'react';
import { jobs } from "@/lib/data";

export default function TuskerHistoryPage() {
    const completedJobs = [
        { job: jobs[3], finalCost: 150, completedDate: "2024-07-18", review: "Great job, very efficient!" },
        { job: jobs[5], finalCost: 80, completedDate: "2024-07-12", review: null },
    ];

    return (
        <div className="card">
            <div className="space-y-1.5 cardHeader">
                <div className="text-2xl font-headline cardTitle">My Job History</div>
                <p className='text-sm text-[var(--muted-foreground)]'>A record of your completed jobs and earnings.</p>
            </div>
            <div className="cardContent">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Job</th>
                            <th>Customer</th>
                            <th>Your Earnings</th>
                            <th>Completed On</th>
                            <th>Customer Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {completedJobs.map((item, index) => (
                            <tr key={index}>
                                <td className="font-medium">{item.job.title}</td>
                                <td>{item.job.postedBy}</td>
                                <td>${item.finalCost}</td>
                                <td>{item.completedDate}</td>
                                <td>
                                    {item.review ? <p className="text-[var(--muted-foreground)]">{item.review}</p> : <span className="text-xs text-[var(--muted-foreground)]">No review yet</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
