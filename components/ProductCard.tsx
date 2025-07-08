'use client';

import Link from 'next/link';

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="block border p-4 rounded shadow hover:shadow-md"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p className="text-green-600">{product.price.toLocaleString()}원</p>
    </Link>
  );
}










