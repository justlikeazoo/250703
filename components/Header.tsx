// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/diet", label: "식단관리" },
  { href: "/products", label: "상품보기" },     // ✅ 추가된 탭
  { href: "/community", label: "커뮤니티" },
  { href: "/mypage", label: "마이페이지" },
  { href: "/login", label: "로그인" },
  { href: "/signup", label: "회원가입" },       // ✅ 추가된 탭
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-xl font-bold text-green-700">
        <Link href="/">🥗 매일 한끼</Link>
      </h1>
      <nav className="flex gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:underline ${
              pathname === link.href ? "text-green-600 font-semibold" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
