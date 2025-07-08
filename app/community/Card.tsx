import { useState } from 'react';
import { Heart } from 'lucide-react';

type Props = {
  title: string;
  content: string;
  author?: string;
  image?: string;
  likes?: number;
};

export default function CommunityCard({ title, content, author, image, likes = 0 }: Props) {
  const [likeCount, setLikeCount] = useState(likes);
  const [liked, setLiked] = useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setLiked(!liked);
    setLikeCount((prev) => prev + (liked ? -1 : 1));
  };

  return (
    <div className="border rounded-xl p-4 shadow bg-white mb-4 hover:shadow-lg transition relative">
      {image && <img src={image} alt="" className="w-full h-40 object-cover rounded-md mb-3" />}
      <h2 className="font-semibold">{title}</h2>
      <p className="text-gray-600">{content}</p>
      {author && <p className="text-xs text-gray-400 mt-1">by {author}</p>}

      <button onClick={toggleLike} className="absolute top-3 right-3">
        <Heart fill={liked ? 'red' : 'none'} className="w-5 h-5" />
      </button>
      <span className="absolute top-3 right-9 text-sm text-gray-500">{likeCount}</span>
    </div>
  );
}
