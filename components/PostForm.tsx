'use client';
import { useSession } from 'next-auth/react';

export default function PostForm() {
  const { data: session } = useSession();

  if (!session) {
    return <p>로그인 후 글을 작성할 수 있습니다.</p>;
  }

  return (
    <form>
      <input type="text" placeholder="제목" />
      <textarea placeholder="내용" />
      <button type="submit">글 작성</button>
    </form>
  );
}