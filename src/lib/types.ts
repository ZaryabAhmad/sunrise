import type { LucideIcon } from "lucide-react";

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface SubCategory {
  id: string;
  name: string;
}

export interface CustomerProfile {
  firstName: string;
  lastName: string;
  joinYear: number;
  favoriteActivities: string[];
}

export interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  postedBy: string;
  postedAt: string;
  budget: number;
  customerProfile?: CustomerProfile;
}

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface WorkerProfile {
  id: string;
  name: string;
  avatarUrl: string;
  tagline: string;
  skills: string[];
  ratings: {
    workQuality: number;
    workEthic: number;
    punctuality: number;
    average: number;
  };
  stats: {
    totalJobs: number;
    totalHours: number;
    totalEarnings: number;
  };
}
