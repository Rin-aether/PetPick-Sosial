import type { FC } from "react";
import { Link } from "react-router-dom";

export const Navbar:FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};
