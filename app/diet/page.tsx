'use client';

import Image from "next/image";
import { useState } from "react";

// 더미 식단 데이터
const diets = [
  {
    id: 1,
    name: "닭가슴살 곤약볶음",
    type: "단백질",
    price: 10500,
    image: "/diet1.jpg",
    tags: ["고단백", "냉장"],
    buyUrl: "https://example.com/product1",
  },
  {
    id: 2,
    name: "제로 홍게죽",
    type: "저당",
    price: 9800,
    image: "/diet2.jpg",
    tags: ["저당", "냉동"],
    buyUrl: "https://example.com/product2",
  },
  {
    id: 3,
    name: "아보카도 칩",
    type: "저칼로리",
    price: 9200,
    image: "/diet3.jpg",
    tags: ["저칼로리", "냉장"],
    buyUrl: "https://example.com/product3",
  },
];

export default function DietPage() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  // 필터링된 식단 리스트
  const filteredDiets =
    selectedFilter === null
      ? diets
      : diets.filter((diet) => diet.type === selectedFilter);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-green-700 mb-4">🍽️ 식단 목록</h1>
      <p className="text-gray-600 mb-6">카테고리를 선택해 식단을 확인해보세요.</p>

      <div className="flex gap-4 mb-8">
        {["단백질", "저당", "저칼로리"].map((label) => (
          <button
            key={label}
            onClick={() =>
              setSelectedFilter((prev) => (prev === label ? null : label))
            }
            className={`px-4 py-2 rounded ${
              selectedFilter === label
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-800 hover:bg-green-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDiets.map((diet) => (
          <div
            key={diet.id}
            className="border rounded-lg shadow hover:shadow-lg overflow-hidden"
          >
            <Image
              src={diet.image}
              alt={diet.name}
              width={400}
              height={250}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{diet.name}</h2>
              <p className="text-sm text-gray-500">{diet.type} 식단</p>
              <p className="text-sm font-semibold mt-1">
                {diet.price.toLocaleString()}원
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {diet.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={diet.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                자세하게 보기
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}