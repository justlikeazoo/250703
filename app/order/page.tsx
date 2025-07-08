'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
}

export default function OrderPage() {
  const searchParams = useSearchParams()
  const productId = searchParams.get('productId')
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:8000/products/${productId}`)
      const data = await res.json()
      setProduct(data)
    }
    if (productId) fetchProduct()
  }, [productId])

  if (!product) return <p className="p-6">로딩 중...</p>

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">🧾 주문 확인</h1>
      <div className="border p-4 rounded shadow bg-white">
        <p className="text-lg font-semibold mb-2">{product.name}</p>
        <p className="text-gray-600 mb-2">가격: {product.price.toLocaleString()}원</p>
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          결제하기
        </button>
      </div>
    </main>
  )
}
