import dynamic from 'next/dynamic'

const ProductDetailPage = dynamic(() => import('@/components/ProductDetailPage'), {
  ssr: false,
})

export default function Page() {
  return <ProductDetailPage />
}

