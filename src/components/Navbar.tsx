import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { logout } from "../lib/firebase";

export const Navbar = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/gallery", label: "Gallery" },
    ...(user ? [{ to: "/profile", label: "Profile" }] : []),
  ];

  const NavLink = ({ to, label }: { to: string; label: string }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`text-white px-3 py-2 rounded transition hover:bg-white/10 hover:underline ${
          isActive ? "bg-white/10 font-bold underline" : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="w-full bg-blue-600 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* ロゴ */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.PNG" alt="logo" className="h-8 sm:h-10 w-auto" />
        </Link>

        {/* PCメニュー */}
        <nav className="hidden sm:flex items-center gap-6 ml-auto">
          {links.map((link) => (
            <NavLink key={link.to} {...link} />
          ))}

          {!user ? (
            <Link
              to="/login"
              className="bg-white text-blue-600 px-4 py-1.5 rounded-md text-sm font-medium shadow hover:bg-blue-100 transition"
            >
              ログイン
            </Link>
          ) : (
            <>
              <img
                src={user.photoURL ?? "/default-user-icon.png"}
                alt="user"
                className="w-8 h-8 rounded-full bg-white p-0.5 shadow"
              />
              <button
                onClick={logout}
                className="px-3 py-1 -ml-3 text-sm font-medium text-white bg-transparent border border-white rounded hover:bg-white hover:text-blue-600 transition"
              >
                ログアウト
              </button>
            </>
          )}
        </nav>

        {/* モバイル ハンバーガー */}
        <button
          className="sm:hidden p-1 focus:outline-none bg-transparent"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2 animate-fade-in">
          {links.map((link) => (
            <NavLink key={link.to} {...link} />
          ))}

          {!user ? (
            <Link
              to="/login"
              className="block w-full text-white text-sm px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition text-center"
              onClick={() => setIsOpen(false)}
            >
              ログイン
            </Link>
          ) : (
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="block w-full mt-16 bg-transparent text-white text-sm px-4 py-2 border border-white rounded hover:bg-white hover:text-blue-600 transition text-center"
            >
              ログアウト
            </button>
          )}
        </div>
      )}
    </header>
  );
};
