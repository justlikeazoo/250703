'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: '닭가슴살 야채볶음',
      price: 10216,
      image: "/images/product1.jpg",
    },
    {
      id: 2,
      name: '연어 샐러드',
      price: 5208,
      image: "/images/product2.jpg",
    },
    {
      id: 3,
      name: '두부 도시락',
      price: 12125,
      image: "/images/product3.jpg",
    }
  ])

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        🥗 매일 한끼에 오신 걸 환영합니다!
      </h1>

      <p className="text-gray-600 mb-6">
        이곳은 당신의 건강한 식단을 관리할 수 있는 플랫폼입니다.
        매일 함께 한끼를 나눠보세요!
      </p>

      {/* 오늘의 인기 식단 */}
      <div className="bg-white rounded-lg shadow p-4 mb-8">
        <h2 className="text-xl font-semibold mb-2">🔥 오늘의 인기 식단</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>닭가슴살 곤약볶음</li>
          <li>연어 샐러드</li>
          <li>저당 두부 스테이크</li>
        </ul>
      </div>

      {/* 인기 상품 추천 */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-4">🛍️ 인기 상품 추천</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))}
        </div>
      </div>
    </main>
  )
}





