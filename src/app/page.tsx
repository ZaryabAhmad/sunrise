import React from "react";
import Link from 'next/link';
import { NextPage } from "next";
import { categories } from '@/lib/data';
import { CategoryCard } from '@/components/category-card';
import { CheckCircle, Briefcase, Smile, ArrowRightCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="w-full py-20 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-headline bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-transparent bg-clip-text">
            Need a Hand? Post a Job and Let the Experts Come to You!
          </h1>
          <p className="max-w-[700px] mx-auto text-[var(--muted-foreground)] md:text-xl mt-4">
            SunriSurf connects you with skilled, reliable workers for everything from home repairs to cleaning.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/jobs/new" className="text-sm h-11 px-8 btn primary-btn">Post a Job</Link>
            <Link href="/jobs" className="text-sm h-11 px-8 btn gray-btn">Find Work</Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">
            Explore our services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {categories.slice(0, 6).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
            <Link href="/services" className="group">
              <div className="rounded-lg border border-[var(--border)] h-full flex flex-col items-center justify-center p-4 text-center transition-all duration-300 bg-white hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] hover:shadow-lg hover:-translate-y-1">
                <div className="p-0 flex flex-col items-center justify-center gap-2">
                  <ArrowRightCircle className="w-8 h-8 text-[var(--primary)] group-hover:text-[var(--primary-foreground)] transition-colors" />
                  <p className="font-semibold text-sm">Explore More</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">How SunriSurf Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-[var(--primary)] text-[var(--primary-foreground)] rounded-full p-4">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">1. Post Your Job</h3>
              <p className="text-[var(--muted-foreground)]">Describe what you need done. It's free and easy to post a job.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-[var(--primary)] text-[var(--primary-foreground)] rounded-full p-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">2. Choose a Worker</h3>
              <p className="text-[var(--muted-foreground)]">Review offers from skilled workers and pick the best one for your needs and budget.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-[var(--primary)] text-[var(--primary-foreground)] rounded-full p-4">
                <Smile className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">3. Get It Done</h3>
              <p className="text-[var(--muted-foreground)]">Your chosen worker completes the job while you relax. Pay securely through our platform.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
