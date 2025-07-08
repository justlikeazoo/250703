// components/RecommendCardList.tsx
'use client';
import FoodCard from "./FoodCard";

const recommendDiets = [
  {
    id: 1,
    title: "닭가슴살 곤약볶음",
    weight: "200g",
    price: 9500,
    salePrice: 7900,
    image: "/images/chicken.jpg",
  },
  {
    id: 2,
    title: "연어 샐러드",
    weight: "180g",
    price: 9900,
    salePrice: 8900,
    image: "/images/salmon.jpg",
  },
  {
    id: 3,
    title: "저당 두부 스테이크",
    weight: "250g",
    price: 8500,
    salePrice: 6700,
    image: "/images/tofu.jpg",
  },
];

export default function RecommendCardList() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">🔥 오늘의 추천 식단</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recommendDiets.map((item) => (
          <FoodCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
