import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/login", label: "Login" },
  { to: "/gallery", label: "Gallery" },
  { to: "/profile", label: "Profile" },
];

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  //ナビ定義
  const NavLink = ({ to, label }: { to: string; label: string }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`text-white px-3 py-2 rounded transition hover:bg-white/10 hover:underline ${
          isActive ? "bg-white/10 font-bold underline" : ""
        }`}
        onClick={() => setIsOpen(false)} // モバイルでクリック時に閉じる
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="w-full bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* ロゴ部分 */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.PNG" alt="logo" className="h-8 sm:h-10 w-auto" />
        </Link>
        {/* PCメニュー */}
        <nav className="hidden sm:flex gap-6">
          {links.map((link) => (
            <NavLink key={link.to} {...link} />
          ))}
        </nav>
        {/* モバイル ハンバーガー */}
        <button
          className="sm:hidden p-1 bg-transparent focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M3 6h14M3 10h14M3 14h14" />
          </svg>
        </button>
      </div>
      {/* モバイル メニュー（展開式） */}
      {isOpen && (
        <nav className="sm:hidden px-4 pb-4 flex flex-col gap-2 animate-fade-in">
          {links.map((link) => (
            <NavLink key={link.to} {...link} />
          ))}
        </nav>
      )}
    </header>
  );
};
