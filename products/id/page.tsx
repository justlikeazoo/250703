'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  volume: string
  calories: string
  shipping: string
  storage: string
  shipping_fee: string
  seller: string
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:8000/products/${id}`)
      if (!res.ok) {
        console.error("상품 데이터를 불러오지 못했습니다.")
        return
      }
      const data = await res.json()
      setProduct(data)
    }

    if (id) fetchProduct()
  }, [id])

  if (!product) return <p className="p-6">⏳ 상품 정보를 불러오는 중입니다...</p>

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-600 mb-1">📦 용량: {product.volume}</p>
      <p className="text-gray-600 mb-1">🔥 칼로리: {product.calories}</p>
      <p className="text-gray-600 mb-1">🧊 보관: {product.storage}</p>
      <p className="text-gray-600 mb-1">🚚 배송: {product.shipping} / {product.shipping_fee}</p>
      <p className="text-gray-600 mb-1">🛍️ 판매자: {product.seller}</p>
      <p className="text-green-600 font-bold text-lg mt-4">
        💰 {product.price.toLocaleString()}원
      </p>

      <div className="mt-6 space-x-4">
        <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          장바구니에 담기
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          구매하기
        </button>
      </div>
    </main>
  )
}

