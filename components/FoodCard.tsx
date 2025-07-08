// components/FoodCard.js
export default function FoodCard({ image, title, weight, price, salePrice }) {
    return (
      <div className="w-60 border rounded-xl p-3 shadow hover:shadow-lg transition bg-white">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
        <h3 className="mt-2 font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{weight}</p>
        <div className="flex justify-between items-end mt-1">
          <div>
            <p className="text-red-500 font-bold text-lg">{salePrice.toLocaleString()}원</p>
            <p className="line-through text-xs text-gray-400">{price.toLocaleString()}원</p>
          </div>
          <button className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600">
            담기
          </button>
        </div>
      </div>
    );
  }
    