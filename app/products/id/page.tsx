// app/products/[id]/page.tsx
'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { products } from '@/data/products'

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<any>(null)

  useEffect(() => {
    const found = products.find((p) => p.id === Number(id))
    setProduct(found)
  }, [id])

  if (!product) return <div className="p-8">⏳ 로딩 중...</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-80 h-80 object-cover rounded mb-4"
      />
      <p className="text-xl text-green-600 mb-2">
        {product.price.toLocaleString()}원
      </p>
      <p className="text-sm text-gray-500 mb-2">보관방법: {product.storage}</p>
      <p className="text-sm text-gray-500 mb-4">배송: {product.shipping_info}</p>

      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        구매하기
      </button>
    </div>
  )
}



