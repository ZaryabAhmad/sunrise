import { Wrench, Truck, Sparkles, Spade, UserCheck, Briefcase } from 'lucide-react';
import type { LucideIcon } from "lucide-react";

export interface ServiceSection {
  title: string;
  description: string;
  tasks: string[];
  icon: LucideIcon;
}


export const serviceSections: ServiceSection[] = [
  {
    title: "Handyman",
    description: "Hire a worker for help around the house.",
    icon: Wrench,
    tasks: [
      "Home Repairs", "Appliance Installation & Repairs", "Furniture Assembly", "TV Mounting", "Drywall Repair Service", "Flooring & Tiling Help", "Electrical Help", "Sealing & Caulking", "Plumbing", "Smart Home Installation", "Heavy Lifting", "Painting", "Install Shelves, Rods & Hooks", "Home Maintenance", "Install Blinds & Window Treatments", "Home Theater Installing"
    ]
  },
  {
    title: "Moving Services",
    description: "From heavy lifting to unpacking and organizing.",
    icon: Truck,
    tasks: [
      "Help Moving", "Truck Assisted Help Moving", "Packing Services & Help", "Unpacking Services", "Heavy Lifting", "Junk Pickup"
    ]
  },
  {
    title: "Cleaning",
    description: "Workers will make your home sparkle!",
    icon: Sparkles,
    tasks: [
      "House Cleaning Services", "Deep Cleaning", "Disinfecting Services", "Move Out Cleaning", "Vacation Rental Cleaning", "Carpet Cleaning Service", "Garage Cleaning", "Car Washing", "Laundry Help", "Pressure Washing"
    ]
  },
  {
    title: "Yardwork Services",
    description: "Help with yardwork & landscaping!",
    icon: Spade,
    tasks: [
      "Gardening Services", "Weed Removal", "Lawn Care Services", "Lawn Mowing Services", "Landscaping Services"
    ]
  },
  {
    title: "Personal Assistant",
    description: "Get help on an hourly or ongoing basis.",
    icon: UserCheck,
    tasks: [
      "Personal Assistant", "Running Your Errands", "Wait in Line", "Organization", "Closet Organization Service", "Interior Design Service", "Virtual Assistant", "Dog Walking"
    ]
  },
  {
    title: "Office Services",
    description: "Hire a worker to help around the office!",
    icon: Briefcase,
    tasks: [
      "Office Cleaning", "Office Tech Setup", "Office Movers", "Office Supply & Snack Delivery", "Office Furniture Assembly", "Office Setup & Organization", "Office Administration", "Office Interior Design", "Moving Office Furniture", "Office Mounting Service"
    ]
  }
];
