import type { Category, Job, WorkerProfile, CustomerProfile, SubCategory } from './types';
import { Wrench, Tv, Truck, Sparkles, Spade, Home, Paintbrush, Heart, GraduationCap, Car, UserSquare } from 'lucide-react';

export const categories: Category[] = [
  { id: 'assembly', name: 'Assembly', icon: Wrench },
  { id: 'mounting', name: 'Mounting', icon: Tv },
  { id: 'moving', name: 'Moving', icon: Truck },
  { id: 'cleaning', name: 'Cleaning', icon: Sparkles },
  { id: 'outdoor-help', name: 'Outdoor Help', icon: Spade },
  { id: 'home-repairs', name: 'Home Repairs', icon: Home },
  { id: 'painting', name: 'Painting', icon: Paintbrush },
  { id: 'personal-assistant', name: 'Personal Assistant', icon: UserSquare },
  { id: 'tutoring', name: 'Tutoring', icon: GraduationCap },
  { id: 'car-services', name: 'Car Services', icon: Car },
];

export const assemblySubcategories: SubCategory[] = [
  { id: 'ikea', name: 'IKEA Furniture' },
  { id: 'desk', name: 'Desk' },
  { id: 'bed-frame', name: 'Bed Frame' },
  { id: 'bookcase', name: 'Bookcase or Shelving Unit' },
  { id: 'dresser', name: 'Dresser' },
  { id: 'table', name: 'Table' },
  { id: 'chairs', name: 'Chairs' },
  { id: 'other-furniture', name: 'Other Furniture' },
  { id: 'exercise-equipment', name: 'Exercise Equipment' },
];

export const mountingSubcategories: SubCategory[] = [
  { id: 'tv-mounting', name: 'TV Mounting' },
  { id: 'shelf-mounting', name: 'Shelf Mounting' },
  { id: 'mirror-hanging', name: 'Mirror & Picture Hanging' },
  { id: 'curtain-rods', name: 'Curtain Rod Installation' },
];

export const movingSubcategories: SubCategory[] = [
  { id: 'packing', name: 'Packing & Unpacking' },
  { id: 'heavy-lifting', name: 'Heavy Lifting & Loading' },
  { id: 'furniture-moving', name: 'Local Furniture Moving' },
  { id: 'junk-removal', name: 'Junk Removal' },
];

export const cleaningSubcategories: SubCategory[] = [
  { id: 'deep-clean', name: 'Deep Clean' },
  { id: 'standard-clean', name: 'Standard Clean' },
  { id: 'move-out-clean', name: 'Move-Out Clean' },
  { id: 'window-cleaning', name: 'Window Cleaning' },
];

export const outdoorHelpSubcategories: SubCategory[] = [
  { id: 'gardening', name: 'Gardening & Weeding' },
  { id: 'lawn-mowing', name: 'Lawn Mowing' },
  { id: 'yard-cleanup', name: 'Yard Cleanup' },
  { id: 'pressure-washing', name: 'Pressure Washing' },
];

export const homeRepairsSubcategories: SubCategory[] = [
  { id: 'plumbing-minor', name: 'Minor Plumbing Repairs' },
  { id: 'electrical-minor', name: 'Minor Electrical Help' },
  { id: 'drywall-patching', name: 'Drywall Patching' },
  { id: 'door-repair', name: 'Door Repair' },
];

export const paintingSubcategories: SubCategory[] = [
  { id: 'interior-painting', name: 'Interior Painting' },
  { id: 'exterior-painting', name: 'Exterior Painting (small projects)' },
  { id: 'touch-ups', name: 'Touch-ups' },
  { id: 'furniture-painting', name: 'Furniture Painting' },
];

export const personalAssistantSubcategories: SubCategory[] = [
  { id: 'personalized-shopper', name: 'Personalized Shopper' },
  { id: 'beauty-care', name: 'Beauty Care' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'stylist', name: 'Stylist' },
  { id: 'pet-sitting', name: 'Pet Sitting' },
  { id: 'dog-walking', name: 'Dog Walking' },
  { id: 'house-sitting', name: 'House Sitting' },
];

export const tutoringSubcategories: SubCategory[] = [
  { id: 'homework-help', name: 'Homework Help' },
  { id: 'music-lessons', name: 'Music Lessons' },
  { id: 'language-tutoring', name: 'Language Tutoring' },
  { id: 'coding-tutoring', name: 'Coding Tutoring' },
  { id: 'math-science-tutoring', name: 'Math & Science Tutoring' },
  { id: 'test-prep', name: 'Test Prep (SAT, ACT, etc.)' },
];

export const carServicesSubcategories: SubCategory[] = [
    { id: 'car-wash', name: 'Car Washing/Detailing' },
    { id: 'inspection', name: 'Inspection' },
    { id: 'oil-change', name: 'Oil Change' },
    { id: 'tire-rotation', name: 'Tire Rotation' },
];


const customerProfiles: { [key: string]: CustomerProfile } = {
  'Alex S': { firstName: 'Alex', lastName: 'Smith', joinYear: 2024, favoriteActivities: ['Hiking', 'Reading', 'Baking'] },
  'Maria G': { firstName: 'Maria', lastName: 'Garcia', joinYear: 2023, favoriteActivities: ['Photography', 'Yoga', 'Gardening'] },
  'Sam J': { firstName: 'Sam', lastName: 'Jones', joinYear: 2024, favoriteActivities: ['Cycling', 'Cooking', 'Live Music'] },
  'Chen W': { firstName: 'Chen', lastName: 'Wei', joinYear: 2022, favoriteActivities: ['Traveling', 'Board Games', 'Calligraphy'] },
  'David L': { firstName: 'David', lastName: 'Lee', joinYear: 2023, favoriteActivities: ['Fishing', 'Woodworking', 'Podcasts'] },
  'Jessica R': { firstName: 'Jessica', lastName: 'Rodriguez', joinYear: 2024, favoriteActivities: ['Painting', 'Museums', 'Volunteering'] },
  'Tom W': { firstName: 'Tom', lastName: 'Wilson', joinYear: 2021, favoriteActivities: ['Running', 'Movies', 'DIY Projects'] },
  'Emily C': { firstName: 'Emily', lastName: 'Carter', joinYear: 2023, favoriteActivities: ['Pottery', 'Thrifting', 'Documentaries'] },
};


export const jobs: Job[] = [
  {
    id: '1',
    title: 'Assemble IKEA Bookshelf',
    description: 'I need help assembling a new Billy bookshelf from IKEA. All parts are here, just need someone with the tools and experience to put it together quickly.',
    category: 'Assembly',
    postedBy: 'Alex S.',
    postedAt: '2 hours ago',
    budget: 50,
    customerProfile: customerProfiles['Alex S'],
    location: "Downtown, SF",
  },
  {
    id: '2',
    title: 'Mount 65" TV on wall',
    description: 'Looking for someone to securely mount my new 65-inch television on a drywall surface. I have the wall mount bracket already.',
    category: 'Mounting',
    location: 'Oakland, CA',
    postedBy: 'Maria G.',
    postedAt: '5 hours ago',
    budget: 80,
    customerProfile: customerProfiles['Maria G'],
  },
  {
    id: '3',
    title: 'Help moving couch and boxes',
    description: 'Need an extra pair of hands to help move a couch, a bed frame, and about 10 boxes from a U-Haul truck into a 2nd-floor apartment. No stairs, there is an elevator.',
    category: 'Moving',
    location: 'Berkeley, CA',
    postedBy: 'Sam J.',
    postedAt: '1 day ago',
    budget: 100,
    customerProfile: customerProfiles['Sam J'],
  },
  {
    id: '4',
    title: 'Deep clean my 1-bedroom apartment',
    description: 'Moving out and need a thorough deep clean of my 1-bedroom, 1-bathroom apartment. Includes kitchen appliances, bathroom, floors, and windows.',
    category: 'Cleaning',
    location: 'Palo Alto, CA',
    postedBy: 'Chen W.',
    postedAt: '2 days ago',
    budget: 150,
    customerProfile: customerProfiles['Chen W'],
  },
  {
    id: '5',
    title: 'Garden weeding and planting',
    description: 'My backyard garden beds are overgrown with weeds. Need someone to clear them out and help plant some new flowers I\'ve bought. About 3-4 hours of work.',
    category: 'Outdoor Help',
    location: 'Marin County, CA',
    postedBy: 'David L.',
    postedAt: '3 days ago',
    budget: 120,
    customerProfile: customerProfiles['David L'],
  },
  {
    id: '6',
    title: 'Fix a leaky kitchen faucet',
    description: 'My kitchen sink faucet has been dripping for a week. It needs to be repaired or possibly replaced. Looking for an experienced handyman.',
    category: 'Home Repairs',
    location: 'San Mateo, CA',
    postedBy: 'Jessica R.',
    postedAt: '4 days ago',
    budget: 75,
    customerProfile: customerProfiles['Jessica R'],
  },
  {
    id: '7',
    title: 'Paint a single bedroom',
    description: 'I need one standard-sized bedroom painted. I will provide the paint and brushes. Just need a professional to do the painting.',
    category: 'Painting',
    location: 'Daly City, CA',
    postedBy: 'Tom W.',
    postedAt: '5 days ago',
    budget: 250,
    customerProfile: customerProfiles['Tom W'],
  },
  {
    id: '8',
    title: 'Help with furniture rearrangement',
    description: 'Need a strong person to help me move my living room furniture around. Should take less than an hour.',
    category: 'Moving',
    location: 'Downtown, SF',
    postedBy: 'Emily C.',
    postedAt: '6 days ago',
    budget: 40,
    customerProfile: customerProfiles['Emily C'],
  }
];

export const workerProfiles: WorkerProfile[] = [
  {
    id: 'worker-1',
    name: 'Max Robinson',
    avatarUrl: 'https://placehold.co/128x128.png',
    tagline: 'Experienced handyman for all your home repair needs.',
    skills: ['Handyman', 'Plumbing', 'Electrical', 'Carpentry'],
    ratings: {
      workQuality: 4.8,
      workEthic: 5.0,
      punctuality: 4.9,
      average: 4.9,
    },
    stats: {
      totalJobs: 112,
      totalHours: 450,
      totalEarnings: 22500,
    }
  },
  {
    id: 'worker-2',
    name: 'Sarah Chen',
    avatarUrl: 'https://placehold.co/128x128.png',
    tagline: 'I bring your clothing ideas to life with expert sewing and tailoring.',
    skills: ['Sewing', 'Tailoring', 'Fashion Design', 'Alterations'],
     ratings: {
      workQuality: 4.9,
      workEthic: 4.8,
      punctuality: 5.0,
      average: 4.9,
    },
    stats: {
      totalJobs: 88,
      totalHours: 320,
      totalEarnings: 18000,
    }
  },
    {
    id: 'worker-3',
    name: 'David Lee',
    avatarUrl: 'https://placehold.co/128x128.png',
    tagline: 'Custom carpentry and beautiful furniture creations.',
    skills: ['Carpentry', 'Furniture Making', 'Woodworking', 'Cabinetry'],
    ratings: {
      workQuality: 5.0,
      workEthic: 4.9,
      punctuality: 4.7,
      average: 4.9,
    },
    stats: {
      totalJobs: 75,
      totalHours: 600,
      totalEarnings: 35000,
    }
  },
   {
    id: 'worker-4',
    name: 'Isabella Rossi',
    avatarUrl: 'https://placehold.co/128x128.png',
    tagline: 'Professional painter for interior and exterior projects.',
    skills: ['Painting', 'Interior Design', 'Drywall Repair'],
     ratings: {
      workQuality: 4.7,
      workEthic: 4.9,
      punctuality: 4.9,
      average: 4.8,
    },
    stats: {
      totalJobs: 50,
      totalHours: 250,
      totalEarnings: 15000,
    }
  },
];


export const mockWorker = workerProfiles[0];

export function getJobById(id: string): Job | undefined {
  return jobs.find((job) => job.id === id);
}
