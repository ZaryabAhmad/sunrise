'use client';

import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

type Option = {
  id: string;
  name: string;
};

type CustomSelectProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: boolean;
};

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder,
  error,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const selectedOption = options.find(option => option.id === value || option.name === value);

  return (
    <div className="relative inline-block w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full px-3 py-2 text-left text-base md:text-sm  bg-[var(--background)] border border-[var(--border)] rounded-md flex items-center justify-between"
      >
        <span className={selectedOption ? 'text-gray-900' : 'text-gray-400'}>
          {selectedOption ? selectedOption.name : placeholder}
        </span>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>

      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="max-h-60 overflow-auto p-1">
            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => {
                  onChange(option.id);
                  setOpen(false);
                }}
                className="cursor-pointer px-2 py-1.5 flex items-center rounded-sm text-sm hover:bg-blue-50 hover:text-blue-900"
              >
                <Check className={`h-4 w-4 mr-2 ${value === option.id ? 'opacity-100' : 'opacity-0'}`} />
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}