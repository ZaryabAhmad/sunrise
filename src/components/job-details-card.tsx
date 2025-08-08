"use client";

import type { Job } from "@/lib/types";
import { MapPin, Calendar, User, DollarSign, Tag, PlusCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// // import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

interface JobDetailsCardProps {
  job: Job;
}

export function JobDetailsCard({ job }: JobDetailsCardProps) {
  return (
    <div className="card">
      <div className="cardHeader">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold font-headline">{job.title}</h1>
            <div className="flex items-center text-sm text-[var(--muted-foreground)] gap-2 pt-2">
              <User className="w-4 h-4" /> Posted by {job.postedBy}
            </div>
          </div>
          {/* <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="shrink-0">
                <PlusCircle className="mr-2 h-4 w-4" /> Request Add-on
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[480px]">
              <DialogHeader>
                <DialogTitle>Request an Add-on Service</DialogTitle>
                <DialogDescription>
                  Describe the additional service needed. The worker must agree to the add-on and the additional cost.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="addon-description">Add-on Service Description</Label>
                  <Textarea
                    id="addon-description"
                    rows={4}
                    placeholder="e.g., 'Also hang a new picture frame in the hallway.'"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="addon-cost">Additional Cost ($)</Label>
                  <Input
                    id="addon-cost"
                    type="number"
                    placeholder="e.g., 20"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                 <Button type="submit">Send Add-on Request</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog> */}
        </div>
      </div>
      <div className="cardContent">
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--muted-foreground)] mb-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[var(--primary)]" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[var(--primary)]" />
            <span>{job.postedAt}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-[var(--primary)]" />
            <div className="badge">{job.category}</div>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-[var(--primary)]" />
            <span className="font-semibold text-[var(--foreground)]">Budget: ${job.budget}</span>
          </div>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-base text-[var(--foreground)]">{job.description}</p>
        </div>
      </div>
    </div>
  );
}
