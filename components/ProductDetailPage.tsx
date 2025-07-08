'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { products } from '@/data/products' // 또는 fetch()

interface Product {
  id: number
  name: string
  price: number
  volume: string
  calories: string
  shipping: string
  shipping_fee: string
  storage: string
  seller: string
  image?: string
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    if (id) {
      // ❗ 로컬 더미 데이터 사용 시:
      const found = products.find((p) => p.id === Number(id))
      setProduct(found ?? null)

      // 또는 API 호출 버전:
      // fetch(`http://localhost:8000/products/${id}`).then(...)
    }
  }, [id])

  if (!product) return <p className="p-6">상품 정보를 불러오는 중입니다...</p>

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2 text-green-700">{product.name}</h1>
      <p className="text-gray-600 mb-1">용량: {product.volume} / 칼로리: {product.calories}</p>
      <p className="text-gray-600 mb-1">보관 방법: {product.storage}</p>
      <p className="text-gray-600 mb-1">배송: {product.shipping} (배송비: {product.shipping_fee})</p>
      <p className="text-gray-600 mb-4">판매자: {product.seller}</p>
      <p className="text-xl font-bold text-green-600 mb-6">{product.price.toLocaleString()}원</p>

      <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        장바구니에 담기
      </button>
    </main>
  )
}

