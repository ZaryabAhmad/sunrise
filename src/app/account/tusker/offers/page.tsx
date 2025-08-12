
import { jobs } from "@/lib/data";
import { Star } from "lucide-react";
import Link from "next/link";
import { JobDetailsCard } from '@/components/job-details-card';

export default function TuskerOffersPage() {
    const myOffers = [
        { job: jobs[2], offerPrice: 95, status: "Pending" },
        { job: jobs[3], offerPrice: 140, status: "Accepted" },
        { job: jobs[4], offerPrice: 110, status: "Declined" },
    ];

    return (
        <div className="card">
            <div className="space-y-1.5 cardHeader">
                <div className="text-2xl font-headline cardTitle">My Sent Offers</div>
                <p className='text-sm text-[var(--muted-foreground)]'>A list of all the offers you've submitted for jobs.</p>
            </div>
            <div className="cardContent">
                <div className='relative w-full overflow-auto'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Job</th>
                                <th>Worker</th>
                                <th>Offer Price</th>
                                <th>Message</th>
                                <th className="text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myOffers.map((offer, index) => (
                                <tr key={index}>
                                    <td className="font-medium">{offer.job.title}</td>
                                    <td>{offer.job.location}</td>
                                    <td>${offer.offerPrice}</td>
                                    <td>
                                        <div className={`badge ${offer.status === 'Accepted' ? 'accepted' : offer.status === 'Pending' ? '' : 'declined'}`} >{offer.status}</div>
                                    </td>
                                    <td className="text-right">
                                        <button className='text-sm h-9 px-4 btn gray-btn'>View Job</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
