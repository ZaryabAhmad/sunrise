'use client';

import { useState } from 'react';
import { Check, ChevronDown} from "lucide-react"


type JobFormProps = {
  categories: string[];
};

export function CategorySelect({ categories }: JobFormProps) {
  const [selected, setSelected] = useState('Moving');
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-3 py-2 text-left text-base md:text-sm  bg-[var(--background)] border border-[var(--border)] rounded-md flex items-center justify-between"
      >
        {selected}
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-[var(--border)] rounded-md shadow-lg p-1">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => {
                setSelected(category);
                setOpen(false);
              }}
              className={`cursor-pointer px-2 py-1.5 flex items-center rounded-sm text-sm hover:bg-[var(--accent)] hover:text-white`}
            >
                <Check className={`h-4 w-4 mr-2 ${selected === category ? 'opacity-100': 'opacity-0' }`} />
                {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}