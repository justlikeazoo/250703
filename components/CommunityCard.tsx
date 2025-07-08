// components/CommunityCard.tsx
type CommunityCardProps = {
    title: string;
    content: string;
    author?: string;
    image?: string;
  };
  
  export default function CommunityCard({ title, content, author, image }: CommunityCardProps) {
    return (
      <div className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white mb-4">
        {image && (
          <img src={image} alt="커뮤니티 이미지" className="w-full h-40 object-cover rounded-md mb-3" />
        )}
        <h2 className="text-lg font-semibold text-green-700">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">{content}</p>
        {author && (
          <p className="text-xs text-gray-400 mt-2">by {author}</p>
        )}
      </div>
    );
  }
  