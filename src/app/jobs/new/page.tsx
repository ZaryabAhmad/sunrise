'use client';

import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import CustomSelect from '@/components/custom-select';
import { Check, ChevronDown, Calendar, Wrench, Tv, Truck, Sparkles, Spade, Home, Paintbrush, UserSquare, GraduationCap, Car } from "lucide-react";

// Types
type Category = {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
};

type SubCategory = {
  id: string;
  name: string;
};

type JobFormData = {
  title: string;
  category: string;
  subcategory?: string;
  description: string;
  location: string;
  budget: string;
  preferredDate: string;
  preferredTime: string;
};

// Data
import {
  categories,
  assemblySubcategories,
  mountingSubcategories,
  movingSubcategories,
  cleaningSubcategories,
  outdoorHelpSubcategories,
  homeRepairsSubcategories,
  paintingSubcategories,
  personalAssistantSubcategories,
  tutoringSubcategories,
  carServicesSubcategories,
} from "@/lib/data"

const timeSlots = [
  'Morning (8am - 12pm)',
  'Afternoon (12pm - 5pm)',
  'Evening (5pm - 9pm)',
  'Flexible'
];

// Mapping subcategories to categories
const subcategoriesMap: Record<string, SubCategory[]> = {
  'assembly': assemblySubcategories,
  'mounting': mountingSubcategories,
  'moving': movingSubcategories,
  'cleaning': cleaningSubcategories,
  'outdoor-help': outdoorHelpSubcategories,
  'home-repairs': homeRepairsSubcategories,
  'painting': paintingSubcategories,
  'personal-assistant': personalAssistantSubcategories,
  'tutoring': tutoringSubcategories,
  'car-services': carServicesSubcategories,
};

// Main Form Component
export default function JobPostingForm() {
  const { control, handleSubmit, watch, setValue, formState: { errors } } = useForm<JobFormData>({
    defaultValues: {
      title: '',
      category: '',
      subcategory: '',
      description: '',
      location: '',
      budget: '',
      preferredDate: '',
      preferredTime: '',
    }
  });

  const watchedCategory = watch('category');
  const currentSubcategories = subcategoriesMap[watchedCategory] || [];

  // Reset subcategory when category changes
  useEffect(() => {
    setValue('subcategory', '');
  }, [watchedCategory, setValue]);

  const onSubmit = (data: JobFormData) => {
    console.log('Form submitted:', data);
    alert('Job posted successfully! Check console for form data.');
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 flex justify-center">
      <div className="w-full max-w-3xl card">
        <div className="cardHeader">
          <div className="cardTitle text-3xl font-headline">Post a New Job</div>
          <p>Describe your task and get connected with skilled workers.</p>
        </div>
        <div className='cardContent'>
          <form className="space-y-6">
            {/* Job Title */}
            <div className="space-y-2">
              <label className="label block">
                Job Title
              </label>
              <Controller
                name="title"
                control={control}
                rules={{ 
                  required: 'Job title is required',
                  minLength: { value: 5, message: 'Title must be at least 5 characters long' }
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="e.g., Assemble a new desk"
                    className="h-10 text-base md:text-sm input"
                  />
                )}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
              )}
            </div>

            {/* Category and Subcategory Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="label block">
                  Category
                </label>
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: 'Category is required' }}
                  render={({ field }) => (
                    <CustomSelect
                      options={categories}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Select a category"
                      error={!!errors.category}
                    />
                  )}
                />
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                )}
              </div>

              {/* Subcategory - Only show if subcategories exist */}
              {currentSubcategories.length > 0 && (
                <div className="space-y-2">
                  <label className="label block">
                    Type of {categories.find(c => c.id === watchedCategory)?.name}
                  </label>
                  <Controller
                    name="subcategory"
                    control={control}
                    render={({ field }) => (
                      <CustomSelect
                        options={currentSubcategories}
                        value={field.value || ''}
                        onChange={field.onChange}
                        placeholder="Select type of service"
                        error={!!errors.subcategory}
                      />
                    )}
                  />
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
            <label className="label block">
                Description
              </label>
              <Controller
                name="description"
                control={control}
                rules={{
                  required: 'Description is required',
                  minLength: { value: 20, message: 'Description must be at least 20 characters long' }
                }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    rows={4}
                    placeholder="Provide as much detail as you can about the task. Include dimensions, special requirements, etc."
                    className="text-base md:text-sm textarea"
                  />
                )}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
              )}
            </div>

            {/* Location and Budget Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="label block">
                  Location
                </label>
                <Controller
                  name="location"
                  control={control}
                  rules={{ required: 'Location is required' }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="e.g., Downtown, SF"
                      className="h-10 text-base md:text-sm input"
                    />
                  )}
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="label block">
                  Your Budget ($)
                </label>
                <Controller
                  name="budget"
                  control={control}
                  rules={{
                    required: 'Budget is required',
                    min: { value: 5, message: 'Budget must be at least $5' },
                    pattern: { value: /^\d+$/, message: 'Budget must be a valid number' }
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="number"
                      min="5"
                      placeholder="e.g., 75"
                      className="h-10 text-base md:text-sm input"
                    />
                  )}
                />
                {errors.budget && (
                  <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
                )}
              </div>
            </div>

            {/* Preferred Date and Time Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
              <label className="label block">
                  Preferred Date
                </label>
                <Controller
                  name="preferredDate"
                  control={control}
                  rules={{ required: 'Preferred date is required' }}
                  render={({ field }) => (
                    <div className="relative">
                      <input
                        {...field}
                        type="date"
                        min="2025-08-07"
                        className="h-10 text-base md:text-sm input"
                      />
                    </div>
                  )}
                />
                {errors.preferredDate && (
                  <p className="text-red-500 text-sm mt-1">{errors.preferredDate.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="label block">
                  Preferred Time
                </label>
                <Controller
                  name="preferredTime"
                  control={control}
                  rules={{ required: 'Please select a preferred time' }}
                  render={({ field }) => (
                    <CustomSelect
                      options={timeSlots.map(slot => ({ id: slot, name: slot }))}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Select a time slot"
                      error={!!errors.preferredTime}
                    />
                  )}
                />
                {errors.preferredTime && (
                  <p className="text-red-500 text-sm mt-1">{errors.preferredTime.message}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="text-sm h-10 px-8 btn primary-btn w-full"
            >
              Review and Post Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}