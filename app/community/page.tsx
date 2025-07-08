'use client'

import { useState } from 'react'

interface Post {
  id: number
  title: string
  content: string
}

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: '다이어트 성공 후기', content: '3개월 만에 10kg 감량했어요!' },
    { id: 2, title: '식단 팁 공유', content: '현미밥 + 닭가슴살 + 야채 추천합니다.' }
  ])

  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)

  const handleAddPost = () => {
    if (!newTitle || !newContent) return
    const newPost: Post = {
      id: Date.now(),
      title: newTitle,
      content: newContent
    }
    setPosts([newPost, ...posts])
    setNewTitle('')
    setNewContent('')
  }

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  const handleEditPost = (id: number) => {
    const post = posts.find(p => p.id === id)
    if (post) {
      setNewTitle(post.title)
      setNewContent(post.content)
      setEditingId(id)
    }
  }

  const handleUpdatePost = () => {
    if (editingId === null) return
    setPosts(
      posts.map(p =>
        p.id === editingId ? { ...p, title: newTitle, content: newContent } : p
      )
    )
    setNewTitle('')
    setNewContent('')
    setEditingId(null)
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📢 커뮤니티 게시판</h1>

      {/* 글 작성 폼 */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="제목"
          className="w-full p-2 border rounded mb-2"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          placeholder="내용"
          className="w-full p-2 border rounded mb-2 h-24"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        {editingId ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleUpdatePost}
          >
            수정 완료
          </button>
        ) : (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleAddPost}
          >
            글 작성
          </button>
        )}
      </div>

      {/* 게시글 목록 */}
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
            <p className="text-gray-700 mb-2 whitespace-pre-line">{post.content}</p>
            <div className="space-x-2">
              <button
                className="text-sm text-blue-600 underline"
                onClick={() => handleEditPost(post.id)}
              >
                수정
              </button>
              <button
                className="text-sm text-red-600 underline"
                onClick={() => handleDeletePost(post.id)}
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
