'use client'

import { useSearchParams } from 'next/navigation'

export default function OrderPage() {
  const searchParams = useSearchParams()
  const productId = searchParams.get('productId')

  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold mb-4">🛒 주문 페이지</h1>
      <p>선택한 상품 ID: {productId}</p>
      {/* 여기에 주문 정보 입력 폼, 결제 등 추가 가능 */}
    </main>
  )
}
