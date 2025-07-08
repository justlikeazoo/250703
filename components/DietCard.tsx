// app/components/DietCard.tsx
'use client';

import Link from 'next/link';

interface DietProps {
  id: number;
  title: string;
  desc: string;
  cal: number;
  image: string;
}

export default function DietCard({ id, title, desc, cal, image }: DietProps) {
  return (
    <div className="rounded-xl shadow hover:shadow-md transition-all border p-4 bg-white">
      <img src={image} alt={title} className="rounded-lg mb-3 w-full h-48 object-cover" />
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-green-600 font-semibold">{cal} kcal</span>
        <Link href={`/diet/${id}`}>
          <button className="text-sm text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded-lg">
            자세히 보기
          </button>
        </Link>
      </div>
    </div>
  );
}
