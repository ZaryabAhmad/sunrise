  import { getJobById } from "@/lib/data";
  import { notFound } from "next/navigation";
  import Image from "next/image";
  import placeholderProfile from "../../../images/128x128.png";
  import { OfferForm } from "@/components/offer-form";
  import { JobDetailsCard } from "@/components/job-details-card";
  import { Heart, ShieldAlert } from "lucide-react";

  export default function JobDetailPage({ params }: { params: any}) {
    const job = getJobById(params.id as string);

    if (!job || !job.customerProfile) {
      notFound();
    }

    const { customerProfile } = job;
    const displayName = `${customerProfile.firstName} ${customerProfile.lastName.charAt(0)}.`;

    return (
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-6">
            <JobDetailsCard job={job} />
            <OfferForm job={job} />
          </div>

          <div className="md:col-span-1 space-y-6">
            <div className="card">
              <div className="cardHeader text-center">
                <div className="flex flex-col items-center gap-2">
                  <Image
                      src={placeholderProfile}
                      data-ai-hint="person avatar"
                      alt={displayName}
                      width={80}
                      height={80}
                      className="rounded-full border-2"
                    />
                    <div>
                      <div className="text-2xl leading-none cardTitle">{displayName}</div>
                      <div className="text-sm text-[var(--muted-foreground)]">Joined in {customerProfile.joinYear}</div>
                    </div>
                </div>
              </div>
              <div className="cardContent">
                  <div className="border-t border-[var(--border)] pt-4">
                    <h4 className="font-semibold text-sm mb-3 flex items-center gap-2 text-[var(--muted-foreground)]">
                      <Heart className="w-4 h-4" /> Favorite Activities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {customerProfile.favoriteActivities.map((activity) => (
                        <div key={activity} className="badge">{activity}</div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-[var(--muted-foreground)] bg-[var(--secondary)] p-3 rounded-md space-y-1">
                      <p className="font-bold flex items-center gap-1.5"><ShieldAlert className="w-4 h-4 text-[var(--primary)]" /> Privacy Note:</p>
                      <p>Full names and contact details are shared only after an offer is accepted to protect your privacy.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
