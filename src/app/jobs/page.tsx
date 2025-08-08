'use client';
import { useState } from 'react';
import { JobCard } from "@/components/job-card";
import { CategorySelect } from '@/components/category-select';
// import { useSearchParams } from 'next/navigation';
import { Star } from "lucide-react";
import { jobs } from "@/lib/data";


const categories = [
  "All Categories", "Assembly", "Mounting", "Moving", "Cleaning", "Outdoor Help", "Home Repairs", "Painting"
]

export default function JobsPage() {
  // const searchParams = useSearchParams();
  // const currentCategory = searchParams.get('category');
  // const searchTerm = searchParams.get('search');


  const filteredJobs = jobs;
  //   const filteredJobs = jobs.filter(job => {
  //     const categoryMatch = currentCategory ? job.category.toLowerCase().replace(' ', '-') === currentCategory : true;
  //     const searchMatch = searchTerm ? job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.description.toLowerCase().includes(searchTerm.toLowerCase()) : true;
  //     return categoryMatch && searchMatch;
  //   });

  const [selectedOption, setSelectedOption] = useState('all');

  // Handler to update state when a radio input is selected
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline">Find Your Next Job</h1>
        <p className="text-muted-foreground mt-2">Browse opportunities to showcase your skills.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 items-start">
        <div className="md:col-span-1">
          <div className="card">
            <div className="space-y-1.5 cardHeader">
              <div className="text-2xl leading-none cardTitle">Filter Jobs</div>
            </div>
            <div className="cardContent space-y-4">
              <div className="mb-6">
                <label htmlFor="search" className="text-sm leading-[1.5] font-medium text-[var(--foreground)] mb-2 block">Search</label>
                <input id="search" className="h-10 text-base md:text-sm input" placeholder="e.g., 'bookshelf' or 'leaky faucet'" />
              </div>
              <div className="mb-6">
                <label htmlFor="category" className="text-sm leading-[1.5] font-medium text-[var(--foreground)] mb-2 block">Category</label>
                <CategorySelect categories={categories} />
              </div>
              <div className="mb-6">
                <label htmlFor="availability" className="text-sm leading-[1.5] font-medium text-[var(--foreground)] mb-2 block">Availability</label>
                <fieldset className='gap-2 flex flex-col space-y-1'>
                  <div className="flex items-center space-x-2 relative group/input">
                    <input
                      type="radio"
                      name="option"
                      value="all"
                      checked={selectedOption === 'all'}
                      onChange={handleOptionChange}
                      className="h-full w-full absolute m-0 z-1 rounded-md opacity-0 cursor-pointer peer"
                    />
                    <label className="w-full text-sm font-medium leading-none flex items-center justify-between rounded-md border-2 border-[var(--secondary)] text-[var(--foreground)] p-2 group-hover/input:bg-[var(--accent)] group-hover/input:text-[var(--primary-foreground)] peer-checked:border-[var(--primary)]">All</label>
                  </div>
                  <div className="flex items-center space-x-2 relative group/input">
                    <input
                      type="radio"
                      name="option"
                      value="immediate"
                      checked={selectedOption === 'immediate'}
                      onChange={handleOptionChange}
                      className="h-full w-full absolute m-0 z-1 rounded-md opacity-0 cursor-pointer peer"
                    />
                    <label className="w-full text-sm font-medium leading-none flex items-center justify-between rounded-md border-2 border-[var(--secondary)] text-[var(--foreground)] p-2 group-hover/input:bg-[var(--accent)] group-hover/input:text-[var(--primary-foreground)] peer-checked:border-[var(--primary)]">Immediate</label>
                  </div>
                  <div className="flex items-center space-x-2 relative group/input">
                    <input
                      type="radio"
                      name="option"
                      value="scheduled"
                      checked={selectedOption === 'scheduled'}
                      onChange={handleOptionChange}
                      className="h-full w-full absolute m-0 z-1 rounded-md opacity-0 cursor-pointer peer"
                    />
                    <label className="w-full text-sm font-medium leading-none flex items-center justify-between rounded-md border-2 border-[var(--secondary)] text-[var(--foreground)] p-2 group-hover/input:bg-[var(--accent)] group-hover/input:text-[var(--primary-foreground)] peer-checked:border-[var(--primary)]">Scheduled</label>
                  </div>
                </fieldset>
              </div>
              <div className="mb-6">
                <label htmlFor="customer-rating" className="text-sm leading-[1.5] font-medium text-[var(--foreground)] mb-2 block">Customer Rating</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Star key={rating} className="w-6 h-6 text-[var(--muted-foreground-50)] hover:text-[var(--primary)] cursor-pointer transition-colors" />
                  ))}
                  <span className="text-sm text-[var(--muted-foreground)] ml-2">& up</span>
                </div>
              </div>
              <button className="text-sm h-10 px-4 btn primary-btn w-[100%]">Apply Filters</button>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="grid gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              <div className="flex items-center justify-center py-20 card">
                <p className="text-muted-foreground">No jobs found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
