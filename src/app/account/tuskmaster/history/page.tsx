
'use client';

import * as React from 'react';
import { jobs, workerProfiles } from "@/lib/data";
import { Star } from "lucide-react";
// import { useToast } from '@/hooks/use-toast';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function CustomerHistoryPage() {
    // const { toast } = useToast();
    const [ratings, setRatings] = React.useState({
        quality: 0,
        ethic: 0,
        punctuality: 0,
    });
    const [comment, setComment] = React.useState("");
    const [workAgain, setWorkAgain] = React.useState<string | undefined>(undefined);


    const handleRating = (type: keyof typeof ratings, value: number) => {
        setRatings(prev => ({ ...prev, [type]: value }));
    };

    const resetReviewState = () => {
        setRatings({ quality: 0, ethic: 0, punctuality: 0 });
        setComment("");
        setWorkAgain(undefined);
    }

    const handleSubmitReview = () => {
        console.log({ ratings, comment, workAgain });
        // toast({
        //     title: "Review Submitted!",
        //     description: "Thank you for your feedback.",
        // });
        // resetReviewState();
    };

    const completedJobs = [
        { job: jobs[2], worker: workerProfiles[2], finalCost: 100, completedDate: "2024-07-15", reviewed: false },
        { job: jobs[4], worker: workerProfiles[3], finalCost: 120, completedDate: "2024-07-10", reviewed: true },
    ];

    const RatingInput = ({ label, type, value }: { label: string; type: keyof typeof ratings; value: number }) => (
        <div className="flex items-center justify-between">
            <label className="label">{label}</label>
            <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        onClick={() => handleRating(type, star)}
                        className={`w-6 h-6 cursor-pointer transition-colors ${star <= value ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/50"}`}
                    />
                ))}
            </div>
        </div>
    );

    return (
        <div className="card">
            <div className="cardHeader">
                <div className="cardTitle">Order History</div>
                <p className='text-sm text-[var(--muted-foreground)]'>A record of your completed jobs.</p>
            </div>
            <div className="cardContent">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Job</th>
                            <th>Worker</th>
                            <th>Final Cost</th>
                            <th>Completed On</th>
                            <th className="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {completedJobs.map((item, index) => (
                            <tr key={index}>
                                <td className="font-medium">{item.job.title}</td>
                                <td>{item.worker.name}</td>
                                <td>${item.finalCost}</td>
                                <td>{item.completedDate}</td>
                                <td className="text-right">
                                    {item.reviewed ? (
                                        <button type='button' className='text-sm h-10 px-4 btn gray-btn' disabled>Review Submitted</button>
                                    ) : (
                                        <button type='button' className='text-sm h-10 px-4 btn gray-btn'>Leave a Review</button>
                                        // <Dialog onOpenChange={(open) => !open && resetReviewState()}>
                                        //   <DialogTrigger asChild>
                                        //     <Button variant="outline" size="sm">Leave a Review</Button>
                                        //   </DialogTrigger>
                                        //   <DialogContent className="sm:max-w-[480px]">
                                        //     <DialogHeader>
                                        //       <DialogTitle>Leave a Review for {item.worker.name}</DialogTitle>
                                        //       <DialogDescription>
                                        //         Your feedback helps other Tuskmasters make informed decisions.
                                        //       </DialogDescription>
                                        //     </DialogHeader>
                                        //     <div className="py-4 space-y-6">
                                        //        <div className="space-y-4">
                                        //         <RatingInput label="Work Quality" type="quality" value={ratings.quality} />
                                        //         <RatingInput label="Work Ethic" type="ethic" value={ratings.ethic} />
                                        //         <RatingInput label="Punctuality" type="punctuality" value={ratings.punctuality} />
                                        //        </div>
                                        //       <div className="space-y-2">
                                        //         <Label htmlFor="comment">Your Review</Label>
                                        //         <Textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Describe your experience..." rows={4}/>
                                        //       </div>
                                        //        <div className="space-y-3">
                                        //         <Label>Would you work with this Tusker again?</Label>
                                        //          <RadioGroup onValueChange={setWorkAgain} value={workAgain} className="flex gap-4">
                                        //            <div className="flex items-center space-x-2">
                                        //             <RadioGroupItem value="yes" id="r-yes" />
                                        //             <Label htmlFor="r-yes">Yes</Label>
                                        //           </div>
                                        //           <div className="flex items-center space-x-2">
                                        //             <RadioGroupItem value="no" id="r-no" />
                                        //             <Label htmlFor="r-no">No</Label>
                                        //           </div>
                                        //         </RadioGroup>
                                        //       </div>
                                        //     </div>
                                        //     <DialogFooter>
                                        //       <DialogClose asChild>
                                        //          <Button variant="outline">Cancel</Button>
                                        //       </DialogClose>
                                        //       <DialogClose asChild>
                                        //         <Button onClick={handleSubmitReview}>Submit Review</Button>
                                        //       </DialogClose>
                                        //     </DialogFooter>
                                        //   </DialogContent>
                                        // </Dialog>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
