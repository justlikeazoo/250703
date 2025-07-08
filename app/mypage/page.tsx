export default function MyPage() {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold text-green-700 mb-4">🙋‍♀️ 마이페이지</h1>
        <p className="text-gray-600 mb-6">내가 업로드한 식단과 댓글, 좋아요를 확인하세요.</p>
  
        <div className="grid gap-4">
          <div className="border rounded p-4 shadow">
            <h2 className="font-semibold">내가 올린 식단</h2>
            <ul className="list-disc list-inside text-sm mt-2">
              <li>고단백 계란 샐러드</li>
              <li>오트밀 닭가슴살죽</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }