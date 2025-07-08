// app/products/page.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  price: number
  volume: string
  calories: string
}

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:8000/products')
      const data = await res.json()
      setProducts(data)
    }
    fetchData()
  }, [])

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛍️ 전체 상품 목록</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {products.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.volume} / {item.calories}</p>
            <p className="font-bold text-green-600 mt-1">{item.price.toLocaleString()}원</p>
            <Link href={`/products/${item.id}`}>
              <button className="mt-3 px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600">
                상세보기
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
