import Link from 'next/link';
import type { Category } from '@/lib/types';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/jobs?category=${category.id}`} className="group">
      <div className="rounded-lg border border-[var(--border)] h-full flex flex-col items-center justify-center p-4 text-center transition-all duration-300 bg-white hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] hover:shadow-lg hover:-translate-y-1">
        <div className="p-0 flex flex-col items-center justify-center gap-2">
          <category.icon className="w-8 h-8 text-[var(--primary)] group-hover:text-[var(--primary-foreground)] transition-colors" />
          <p className="font-semibold text-sm">{category.name}</p>
        </div>
      </div>
    </Link>
  );
}