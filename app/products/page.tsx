// app/products/page.tsx
'use client'

import Link from 'next/link'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function ProductListPage() {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">🛒 전체 상품 목록</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  )
}




