export default function SignupPage() {
    return (
      <main className="p-8 max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-green-700 mb-6">👤 회원가입</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="닉네임"
            className="p-3 border rounded"
          />
          <input
            type="email"
            placeholder="이메일"
            className="p-3 border rounded"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="p-3 border rounded"
          />
          <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
            가입하기
          </button>
        </form>
      </main>
    );
  }