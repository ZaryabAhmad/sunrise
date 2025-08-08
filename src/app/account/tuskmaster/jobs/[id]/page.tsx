import { getJobById, workerProfiles } from "@/lib/data";
import { notFound } from "next/navigation";
import { JobDetailsCard } from "@/components/job-details-card";
import { Star } from "lucide-react";
import Link from "next/link";

// Use `any` for params to avoid TS complaining about Promise type mismatch
export default function TuskmasterJobViewPage({
  params,
}: {
  params: any;
}) {
  const job = getJobById(params.id as string);

  if (!job) {
    notFound();
  }

  const offers = [
    { id: "offer-1", job, worker: workerProfiles[0], offerPrice: 45, message: "I have all the tools and can do this tomorrow afternoon." },
    { id: "offer-3", job, worker: workerProfiles[2], offerPrice: 50, message: "I've assembled many of these, I can get it done quickly." },
  ];

  return (
    <div className="space-y-8">
      <JobDetailsCard job={job} />
      <div className="card">
        <div className="cardHeader">
          <div className="cardTitle">Received Offers ({offers.length})</div>
          <p className="text-sm text-[var(--muted-foreground)]">
            Review offers from Tuskers for your job. You can chat with them or accept an offer.
          </p>
        </div>
        <div className="cardContent">
          {offers.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Tusker</th>
                  <th>Offer Price</th>
                  <th>Message</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {offers.map((offer) => (
                  <tr key={offer.id}>
                    <td>
                      <div className="flex items-center gap-2">
                        <span>{offer.worker.name}</span>
                        <div className="badge gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          {offer.worker.ratings.average}
                        </div>
                      </div>
                    </td>
                    <td>${offer.offerPrice}</td>
                    <td className="text-sm text-muted-foreground line-clamp-2">{offer.message}</td>
                    <td>
                      <div className="flex justify-end gap-2">
                        <Link href="/" className="text-sm h-9 px-4 btn gray-btn">Chat</Link>
                        <Link href={`/account/tuskmaster/offers/${offer.id}/accept`} className="text-sm h-9 px-4 btn primary-btn">Accept</Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center text-muted-foreground py-8">
              <p>You haven't received any offers for this job yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}