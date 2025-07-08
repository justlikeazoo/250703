// mock/posts.ts

export const posts = [
  {
    id: 1,
    title: '샐러드 레시피 공유',
    content: '오늘 점심 샐러드 공유!',
    author: '헬린이',
    image: '/images/salad.jpg',
    createdAt: '2025-07-01T10:00:00Z',
    likes: 3,
    comments: [
      { id: 1, text: '맛있어 보여요!', author: 'user1' },
      { id: 2, text: '저도 해볼게요!', author: 'user2' },
    ],
  },
  {
    id: 2,
    title: '저탄수 후기',
    content: '포만감 좋아요',
    author: '저탄수러버',
    image: '/images/lowcarb.jpg',
    createdAt: '2025-07-02T08:30:00Z',
    likes: 5,
    comments: [],
  },
];

export const popularDiets = [
  {
    id: 1,
    title: '닭가슴살 곤약볶음',
    desc: '고단백, 저칼로리 다이어트 식단',
    cal: 320,
    image: '/images/chicken.jpg',
  },
  {
    id: 2,
    title: '연어 샐러드',
    desc: '오메가3 풍부한 저탄고지 식단',
    cal: 280,
    image: '/images/salmon.jpg',
  },
  {
    id: 3,
    title: '저당 두부 스테이크',
    desc: '포만감 높은 식물성 단백질',
    cal: 300,
    image: '/images/tofu.jpg',
  },
];
  