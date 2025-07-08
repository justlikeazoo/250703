'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useCartStore } from '@/store/cartStore'

interface Product {
  id: number
  name: string
  price: number
  volume: string
  calories: string
  description?: string
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const addToCart = useCartStore((state) => state.addToCart)

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:8000/products/${id}`)
      const data = await res.json()
      setProduct(data)
    }
    if (id) fetchProduct()
  }, [id])

  if (!product) return <p className="p-6">로딩 중...</p>

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
    })
    alert('장바구니에 담겼습니다!')
  }

  const handleBuyNow = () => {
    router.push(`/order?productId=${product.id}`)
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-1">{product.volume} / {product.calories}</p>
      <p className="text-lg font-bold text-green-600 mb-4">{product.price.toLocaleString()}원</p>
      <p className="mb-6">{product.description || "이 상품에 대한 설명이 없습니다."}</p>

      <div className="flex gap-4">
        <button onClick={handleAddToCart} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          장바구니에 담기
        </button>
        <button onClick={handleBuyNow} className="p


