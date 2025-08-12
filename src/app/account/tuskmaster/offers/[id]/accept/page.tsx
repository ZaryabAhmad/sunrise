import { Send, CheckCircle, FileText, ShieldAlert } from "lucide-react";
import placeholderProfile from "../../../../../../images/128x128.png";
import Image from "next/image";
import { jobs, workerProfiles } from "@/lib/data";
import Link from "next/link";

// This is a mock page. In a real app, you'd fetch the offer by ID.
export default function AcceptOfferPage({
  params,
}: {
  params: any;
}) {
    const job = jobs[0];
    const worker = workerProfiles[0];
    const offerPrice = 45;

    const workerDisplayName = `${worker.name.split(' ')[0]} ${worker.name.split(' ')[1].charAt(0)}.`;
    const workerFirstName = worker.name.split(' ')[0];


    return (
        <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-6">
                <div className="card">
                    <div className="space-y-1.5 cardHeader">
                        <div className="text-2xl font-headline cardTitle">Finalize Your Agreement</div>
                        <p className='text-sm text-[var(--muted-foreground)]'>Confirm the details below to accept {workerDisplayName}'s offer for "{job.title}".</p>
                    </div>
                    <div className="cardContent space-y-6">
                        <div>
                            <h3 className="font-semibold mb-2">Offer Summary</h3>
                            <div className="p-4 bg-[var(--secondary)] rounded-lg space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-[var(--muted-foreground)]">Worker:</span>
                                    <span>{workerDisplayName}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[var(--muted-foreground)]">Job:</span>
                                    <span>{job.title}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[var(--muted-foreground)]">Offer Price:</span>
                                    <span className="font-bold text-lg text-[var(--primary)]">${offerPrice}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2 flex items-center gap-2"><FileText className="w-5 h-5" /> Terms & Conditions</h3>
                            <div className="p-4 border border-[var(--border)] rounded-lg space-y-2 text-xs text-[var(--muted-foreground)]">
                                <p>By accepting this offer, you agree to pay the offer price upon satisfactory completion of the job.</p>
                                <p>SunriSurf will hold the payment in escrow and release it to the worker once you mark the job as complete.</p>
                                <p>Cancellations must be made at least 24 hours before the scheduled time. Contact support for any disputes.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2 flex items-center gap-2 text-[var(--destructive-80)]"><ShieldAlert className="w-5 h-5" /> Safety & Trust</h3>
                            <div className="p-4 border border-[var(--destructive-20)] bg-[var(--destructive-05)] rounded-lg space-y-2 text-xs text-[var(--destructive-90)]">
                                <p className="font-bold">Your safety is our priority.</p>
                                <p>All communication and payments should be made through the SunriSurf platform. This protects your personal information and ensures you are covered by our policies.</p>
                                <p>Report any inappropriate behavior, harassment, or safety concerns to our support team immediately. We have a zero-tolerance policy for harassment of any kind.</p>
                            </div>
                        </div>

                        <Link className="w-full text-sm h-11 px-4 btn primary-btn" href={`/jobs/${job.id}`}>
                            <CheckCircle className="mr-2 h-5 w-5" />
                            Accept Offer & Finalize
                        </Link>

                    </div>
                </div>
            </div>

            <div className="md:col-span-1">
                <div className="card flex flex-col h-[70vh] min-h-[320px] ">
                    <div className="cardHeader border-b border-[var(--border)]">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 min-w-10">
                                {/* <Image
                                    src={placeholderProfile}
                                    alt="avatar"
                                    width={40}
                                    height={40}
                                    className="h-full w-full rounded-full"
                                /> */}
                                <span className="h-full w-full overflow-hidden rounded-full flex items-center justify-center text-base text-white bg-[var(--primary)]">JD</span>
                            </div>
                            <div>
                                <div className="cardTitle text-base">{workerDisplayName}</div>
                                <p className="text-xs text-[var(--muted-foreground)]">Worker for "{job.title}"</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow overflow-auto p-4 space-y-4">
                        <div className="flex justify-end">
                            <div className="bg-[var(--primary)] text-[var(--primary-foreground)] p-2 rounded-lg max-w-xs text-sm">
                                <p>Hi {workerFirstName}, just reviewing the offer. Everything looks good. Are you ready to start tomorrow?</p>
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <div className="bg-[var(--secondary)] p-2 rounded-lg max-w-xs text-sm">
                                <p>Absolutely! I'm all set. See you at 2 PM.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 border-t border-[var(--border)] mt-auto">
                        <div className="relative">
                            <input placeholder="Message..." className="pr-10 text-sm input" />
                            <button className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-md hover:bg-[var(--accent)] hover:text-white flex items-center justify-center">
                                <Send className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
