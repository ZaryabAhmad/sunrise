
import { jobs, workerProfiles } from "@/lib/data";
import { Star } from "lucide-react";
import Link from "next/link";

export default function CustomerOffersPage() {
    const offers = [
        { id: "offer-1", job: jobs[0], worker: workerProfiles[0], offerPrice: 45, message: "I have all the tools and can do this tomorrow afternoon." },
        { id: "offer-2", job: jobs[1], worker: workerProfiles[1], offerPrice: 75, message: "I'm a professional and can mount this securely for you." },
        { id: "offer-3", job: jobs[0], worker: workerProfiles[2], offerPrice: 50, message: "I've assembled many of these, I can get it done quickly." },
    ];

    return (
        <div className="card">
            <div className="space-y-1.5 cardHeader">
                <div className="text-2xl font-headline cardTitle">Received Offers</div>
                <p className='text-sm text-[var(--muted-foreground)]'>Review offers from workers for your job postings.</p>
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
                            {offers.map((offer) => (
                                <tr key={offer.id}>
                                    <td className="font-medium">{offer.job.title}</td>
                                    <td>
                                        <div className="flex items-center justify-between gap-2">
                                            <span>{offer.worker.name}</span>
                                            <div className="badge gap-1">
                                                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                {offer.worker.ratings.average}
                                            </div>
                                        </div>
                                    </td>
                                    <td>${offer.offerPrice}</td>
                                    <td>
                                        <p className="text-sm text-muted-foreground line-clamp-2">{offer.message}</p>
                                    </td>
                                    <td>
                                        <div className="flex justify-end gap-2">
                                            <Link href='/' className='text-sm h-9 px-4 btn gray-btn'>Chat</Link>
                                            <Link href={`/account/tuskmaster/offers/${offer.id}/accept`} className='text-sm h-9 px-4 btn primary-btn'>Accept</Link>
                                        </div>
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
