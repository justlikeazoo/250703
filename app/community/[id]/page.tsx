'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function PostDetailPage() {
  const { id } = useParams();
  const postId = Number(id);

  // 임시 게시글 1개
  const post = {
    id: postId,
    title: '다이어트 성공 후기',
    content: '3개월 만에 10kg 감량했어요!',
    author: 'yoonju',
    createdAt: '2025-07-06',
    likes: 3,
  };

  const initialComments = [
    { id: 1, author: 'minseo', text: '멋져요!' },
    { id: 2, author: 'jiyoon', text: '저도 자극받고 갑니다!' },
  ];

  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  const handleAddComment = () => {
    if (newComment.trim() === '') return;
    const newId = comments.length + 1;
    setComments([...comments, { id: newId, author: 'you', text: newComment }]);
    setNewComment('');
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-2">작성자: {post.author} | 작성일: {post.createdAt}</p>
      <div className="mb-4">{post.content}</div>

      {/* 좋아요 기능 */}
      <div className="mb-6">
        <button
          onClick={handleLike}
          className={`px-3 py-1 rounded ${liked ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
        >
          ❤️ 좋아요 {likes}
        </button>
      </div>

      {/* 댓글 */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">💬 댓글</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="flex justify-between items-center border-b py-1">
            <p>
              <strong>{comment.author}</strong>: {comment.text}
            </p>
            {comment.author === 'you' && (
              <button
                className="text-sm text-red-500"
                onClick={() => handleDeleteComment(comment.id)}
              >
                삭제
              </button>
            )}
          </div>
        ))}

        {/* 댓글 작성 */}
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="댓글을 입력하세요"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="border px-2 py-1 w-full"
          />
          <button onClick={handleAddComment} className="bg-blue-500 text-white px-4 rounded">
            작성
          </button>
        </div>
      </div>
    </main>
  );
}

